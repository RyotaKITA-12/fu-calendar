package controllers

import (
	"net/http"

	"github.com/RyotaKITA-12/fu-calendar.git/database"
	"github.com/RyotaKITA-12/fu-calendar.git/models"
	"github.com/gin-gonic/gin"
)

func GetGroups(c *gin.Context) {
	var data map[string]string

	if err := c.BindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	var members []models.Group
	db := database.GetDB()
	db.Where("host_id = ?", data["host_id"]).Find(&members)

	var groups []string
	for _, v := range members {
		if !contains(groups, v.GroupName) {
			groups = append(groups, v.GroupName)
		}
	}

	c.JSON(200, groups)
}

func contains(s []string, e string) bool {
	for _, v := range s {
		if e == v {
			return true
		}
	}
	return false
}

func GetMembers(c *gin.Context) {
	var data map[string]string

	if err := c.BindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	var groups []models.Group
	db := database.GetDB()
	db.Where("group_name = ? and host_id = ?",
		data["group_name"],
		data["host_id"]).Find(&groups)

	c.JSON(200, groups)
}

func RegisterGroup(c *gin.Context) {
	var data map[string]string

	if err := c.BindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	group := models.Group{
		HostID:    data["host_id"],
		GroupName: data["group_name"],
		MemberID:  data["member_id"],
	}

	db := database.GetDB()
	db.Create(&group)

	c.JSON(200, group)
}
