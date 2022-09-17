package models

import (
	"github.com/jinzhu/gorm"
)

type Application struct {
	gorm.Model
	ScheduleID int    `json:"schedule_id"`
	UserID     string `json:"user_id"`
	Comment    string `json: "comment"`
	Invited    bool   `json:"invited"`
	Approved   bool   `json:"approved"`
}
