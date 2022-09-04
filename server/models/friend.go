package models

import (
	"github.com/jinzhu/gorm"
)

type Friend struct {
	gorm.Model
	HostID   string `json:"host_id"`
	MemberID string `json:"member_id"`
}
