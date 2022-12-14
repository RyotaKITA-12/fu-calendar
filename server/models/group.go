package models

import (
	"github.com/jinzhu/gorm"
)

type Member struct {
	gorm.Model
	HostID    string `json:"host_id"`
	GroupName string `json:"group_name"`
	MemberID  string `json:"member_id"`
}

type Group struct {
	gorm.Model
	HostID    string `json:"host_id"`
	GroupName string `json:"group_name"`
}
