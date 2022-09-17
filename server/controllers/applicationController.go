package controllers

import (
	"log"
	"net/http"
	"sort"
	"strconv"
	"time"

	"github.com/RyotaKITA-12/fu-calendar.git/database"
	"github.com/RyotaKITA-12/fu-calendar.git/models"
	"github.com/gin-gonic/gin"
)

func GetApplicationStatus(c *gin.Context) {
	var data map[string]string

	if err := c.BindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	var application models.Application
	db := database.GetDB()
	db.Where("schedule_id = ? AND user_id = ?", data["schedule_id"], data["user_id"]).First(&application)

	c.JSON(200, application)
}

func ApplyToSchedule(c *gin.Context) {
	var data map[string]string

	if err := c.BindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	application_id, _ := strconv.Atoi(data["application_id"])
	log.Println(data["application_id"])

	var application []models.Application

	db := database.GetDB()
	db.Model(&application).Where("id = ?", application_id).Update("approved", true)

	c.JSON(200, application)
}

func InviteToSchedule(c *gin.Context) {
	var data map[string]string

	if err := c.BindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	schedule_id, _ := strconv.Atoi(data["schedule_id"])

	application := models.Application{
		ScheduleID: schedule_id,
		UserID:     data["user_id"],
		Comment:    data["comment"],
		Invited:    true,
		Approved:   false,
	}

	db := database.GetDB()
	db.Create(&application)

	c.JSON(200, application)
}

type sampleApplication struct {
	ApplicationID int       `json:"application_id"`
	ScheduleID    int       `json:"schedule_id"`
	HostID        string    `json:"host_id"`
	UserID        string    `json:"user_id"`
	Title         string    `json:"title"`
	Category      string    `json:"category"`
	Content       string    `json:"content"`
	StartDate     time.Time `json:"start_date"`
	EndDate       time.Time `json:"end_date"`
	Comment       string    `json:"comment"`
	Approved      bool      `json:"approved"`
}

func GetInvitedSchedule(c *gin.Context) {
	var data map[string]string

	if err := c.BindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	var sample_invited []sampleApplication
	var applications []models.Application
	db := database.GetDB()
	db.Where("user_id = ?", data["user_id"]).Find(&applications)

	for _, v := range applications {
		var schedule models.Schedule
		db.Where("id = ?", v.ScheduleID).First(&schedule)
		if schedule.UserID == data["host_id"] {
			sample_invited = append(sample_invited,
				sampleApplication{
					ApplicationID: int(v.ID),
					ScheduleID:    int(v.ScheduleID),
					HostID:        data["host_id"],
					UserID:        data["user_id"],
					Title:         schedule.Title,
					Category:      schedule.Category,
					Content:       schedule.Content,
					StartDate:     schedule.StartDate,
					EndDate:       schedule.EndDate,
					Comment:       v.Comment,
					Approved:      v.Approved,
				})
		}
	}
	db.Where("user_id = ?", data["host_id"]).Find(&applications)

	for _, v := range applications {
		var schedule models.Schedule
		db.Where("id = ?", v.ScheduleID).First(&schedule)
		if schedule.UserID == data["user_id"] {
			sample_invited = append(sample_invited,
				sampleApplication{
					ApplicationID: int(v.ID),
					ScheduleID:    int(v.ScheduleID),
					HostID:        data["user_id"],
					UserID:        data["host_id"],
					Title:         schedule.Title,
					Category:      schedule.Category,
					Content:       schedule.Content,
					StartDate:     schedule.StartDate,
					EndDate:       schedule.EndDate,
					Comment:       v.Comment,
					Approved:      v.Approved,
				})
		}
	}

	sort.Slice(sample_invited, func(i, j int) bool {
		return sample_invited[i].StartDate.Before(sample_invited[j].StartDate)
	})

	c.JSON(200, sample_invited)
}
