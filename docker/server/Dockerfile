FROM golang:1.19-alpine AS build

WORKDIR /api
COPY . .

RUN go install github.com/cosmtrek/air@latest
CMD "air"
