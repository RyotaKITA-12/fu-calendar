package main

import (
	"github.com/RyotaKITA-12/fu-calendar.git/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		// AllowCredentials: true,
		AllowOrigins: "http://localhost:8080",
		AllowMethods: "GET, POST, DELETE, PUT",
		AllowHeaders: "Authorization",
	}))

	routes.Setup(app)

	app.Listen(":8888")
}
