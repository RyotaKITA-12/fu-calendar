package database

import (
	"fmt"
	"log"
	"os"

	"github.com/RyotaKITA-12/fu-calendar.git/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var (
	schema         = "%s:%s@tcp(fucalendar:3306)/%s?charset=utf8&parseTime=True&loc=Local"
	username       = os.Getenv("MYSQL_USER")
	password       = os.Getenv("MYSQL_PASSWORD")
	dbName         = os.Getenv("MYSQL_DATABASE")
	datasourceName = fmt.Sprintf(schema, username, password, dbName)

	err        error
	connection *gorm.DB
	DB         *gorm.DB
)

func Connect() {

	connection, err = gorm.Open(mysql.Open(datasourceName), &gorm.Config{})
	if err != nil {
		log.Fatalln(err)
	}

	DB = connection

	connection.AutoMigrate(&models.Schedule{})
}
