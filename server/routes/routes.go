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

	r.POST("/delete/group", controllers.DeleteGroup)
    r.POST("/delete/group/member", controllers.DeleteMember)
	r.POST("/register/schedule", controllers.RegisterSchedule)
	r.POST("/register/group/member", controllers.RegisterMember)
	r.POST("/register/group", controllers.RegisterGroup)
	r.POST("/register/friend", controllers.RegisterFriend)
	r.POST("/schedules", controllers.GetMySchedules)
	r.POST("/schedules/invited", controllers.GetInvitedSchedules)
	r.POST("/groups", controllers.GetGroups)
	r.POST("/group/members", controllers.GetMembers)
	r.POST("/friends", controllers.GetFriends)

	return r
}
