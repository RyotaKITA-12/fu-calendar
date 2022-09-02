package main

import (
	"github.com/RyotaKITA-12/fu-calendar.git/database"
	"github.com/RyotaKITA-12/fu-calendar.git/routes"
)

func main() {
	database.Init()
	r := routes.Setup()
	r.Run(":8080")

	database.Close()
}
