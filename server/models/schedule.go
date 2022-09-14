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
    Category   string    `json:"category"`
	Content   string    `json:"content"`
	StartDate time.Time `json:"start"`
	EndDate   time.Time `json:"end"`
}
