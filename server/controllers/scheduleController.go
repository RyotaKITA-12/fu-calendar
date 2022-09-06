package controllers

import (
	"log"
	"net/http"
	"time"

	"github.com/RyotaKITA-12/fu-calendar.git/database"
	"github.com/RyotaKITA-12/fu-calendar.git/models"
	"github.com/gin-gonic/gin"
)

func GetMySchedules(c *gin.Context) {
	var data map[string]string

	if err := c.BindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	var schedules []models.Schedule
	db := database.GetDB()
	db.Where("user_id = ?", data["user_id"]).Find(&schedules)

	c.JSON(200, schedules)
}

type sampleInvited struct {
	HostID  string   `json:"host_id"`
	Members []string `json:"members"`
}

func GetInvitedSchedules(c *gin.Context) {
	var data sampleInvited

	if err := c.BindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	db := database.GetDB()
	var members []models.Member
	var tmp_schedules []models.Schedule
	var schedules []models.Schedule
	for _, v := range data.Members {
		db.Where("host_id = ? AND member_id = ?", v, data.HostID).Find(&members)
		for _, m := range members {
			db.Where("user_id = ? AND group_name = ?", v, m.GroupName).Find(&tmp_schedules)
			schedules = append(schedules, tmp_schedules...)
		}
	}

	c.JSON(200, schedules)
}

func RegisterSchedule(c *gin.Context) {
	var data map[string]string

	if err := c.BindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	log.Println(data["start"])

	start, _ := time.Parse("Mon Jan 02 2006 15:04:05 GMT+0900 (日本標準時)", data["start"])
	end, _ := time.Parse("Mon Jan 02 2006 15:04:05 GMT+0900 (日本標準時)", data["end"])

	log.Println(start)

	schedule := models.Schedule{
		UserID:    data["user_id"],
		Title:     data["title"],
		GroupName: data["group"],
		Locate:    data["locate"],
		StartDate: start,
		EndDate:   end,
	}

	db := database.GetDB()
	db.Create(&schedule)

	c.JSON(200, schedule)
}
