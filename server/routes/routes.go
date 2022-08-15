package routes

import (
	"github.com/RyotaKITA-12/fu-calendar.git/controllers"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.Get("/public", controllers.Public)
	app.Get("/private", controllers.Private)
}
