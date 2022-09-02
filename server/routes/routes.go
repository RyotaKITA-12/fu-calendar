package routes

import (
	"github.com/RyotaKITA-12/fu-calendar.git/controllers"
	"github.com/gin-gonic/gin"
)

func Setup() *gin.Engine {
	r := gin.Default()

	r.POST("/register/schedule", controllers.RegisterSchedule)

	return r
}
