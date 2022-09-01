package models

import (
	"gorm.io/gorm"
	"time"
)

type Schedule struct {
	gorm.Model
	UserID string    `json:"user_id"`
	Title  string    `json:"title"`
	Group  string    `json:"group"`
	Locate string    `json:"locate"`
	Start  time.Time `json:"start"`
	End    time.Time `json:"end"`
}
