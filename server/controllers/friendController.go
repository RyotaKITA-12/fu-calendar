package controllers

import (
	"net/http"

	"github.com/RyotaKITA-12/fu-calendar.git/database"
	"github.com/RyotaKITA-12/fu-calendar.git/models"
	"github.com/gin-gonic/gin"
)

func GetFriends(c *gin.Context) {
	var data map[string]string

	if err := c.BindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	var members []models.Friend
	db := database.GetDB()
	db.Where("host_id = ?", data["host_id"]).Find(&members)

	var friends []string
	for _, v := range members {
		friends = append(friends, v.MemberID)
	}

	c.JSON(200, friends)
}

func RegisterFriend(c *gin.Context) {
	var data map[string]string

	if err := c.BindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	friend := models.Friend{
		HostID:   data["host_id"],
		MemberID: data["member_id"],
	}

	db := database.GetDB()
	db.FirstOrCreate(&friend, models.Friend{
		HostID:   data["host_id"],
		MemberID: data["member_id"],
    })

	c.JSON(200, friend)
}
