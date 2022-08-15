package controllers

import "github.com/gofiber/fiber/v2"

func Public(c *fiber.Ctx) error {
	return c.SendString("Hello public!")
}

func Private(c *fiber.Ctx) error {
	return c.SendString("Hello private!")
}
