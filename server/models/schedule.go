package models

import (
	"time"

	"github.com/jinzhu/gorm"
)

type Schedule struct {
	gorm.Model
	UserID    string    `json:"user_id"`
	Title     string    `json:"title"`
	GroupName string    `json:"group"`
	Locate    string    `json:"locate"`
	StartDate time.Time `json:"start"`
	EndDate   time.Time `json:"end"`
}
