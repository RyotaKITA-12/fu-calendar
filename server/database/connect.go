package database

import (
	"fmt"
	"os"

	"github.com/RyotaKITA-12/fu-calendar.git/models"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var (
	schema         = "host=db port=5432 user=%s dbname=%s password=%s sslmode=disable"
	username       = os.Getenv("POSTGRES_USER")
	password       = os.Getenv("POSTGRES_PASSWORD")
	dbName         = os.Getenv("POSTGRES_DATABASE")
	datasourceName = fmt.Sprintf(schema, username, dbName, password)

	db  *gorm.DB
	err error
)

func Init() {
	db, err = gorm.Open("postgres", datasourceName)
	if err != nil {
		panic(err)
	}

	autoMigration()
}

func GetDB() *gorm.DB {
	return db
}

func autoMigration() {
	db.AutoMigrate(&models.Schedule{})
}

func Close() {
	if err := db.Close(); err != nil {
		panic(err)
	}
}
