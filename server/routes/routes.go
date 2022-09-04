package routes

import (
	"github.com/RyotaKITA-12/fu-calendar.git/controllers"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func Setup() *gin.Engine {
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:8080"},
		AllowMethods: []string{"GET", "POST", "DELETE", "OPTIONS"},
		AllowHeaders: []string{
			"Access-Control-Allow-Origin",
			"Access-Control-Allow-Credentials",
			"Access-Control-Allow-Headers",
			"Content-Type",
			"Content-Length",
			"Accept-Encoding",
			"Authorization",
		},
		AllowCredentials: true,
	}))

	r.POST("/register/schedule", controllers.RegisterSchedule)
	r.POST("/register/group", controllers.RegisterGroup)
	r.POST("/register/friend", controllers.RegisterFriend)
	r.POST("/schedules", controllers.GetSchedules)
	r.POST("/groups", controllers.GetGroups)
	r.POST("/friends", controllers.GetFriends)

	return r
}
