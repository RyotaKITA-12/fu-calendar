package controllers

import (
	"log"
	"time"

	"github.com/RyotaKITA-12/fu-calendar.git/database"
	"github.com/RyotaKITA-12/fu-calendar.git/models"
	"github.com/gofiber/fiber/v2"
)

func RegisterSchedule(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		log.Fatalln(err)
	}

	start, _ := time.Parse("Mon Jan 02 2006 15:04:05 GMT+0900 (日本標準時)", data["start"])
	end, _ := time.Parse("Mon Jan 02 2006 15:04:05 GMT+0900 (日本標準時)", data["end"])

	schedule := models.Schedule{
		UserID: data["user_id"],
		Title:  data["title"],
		Group:  data["group"],
		Locate: data["locate"],
		Start:  start,
		End:    end,
	}

	database.DB.Create(&schedule)

	return c.JSON(schedule)
}
