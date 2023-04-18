import express from "express"
import { Notifications } from "../Controllers/NotificationControoller.js"



const NotificationRouter=express.Router()
// UserRouter.post("/register/User/seeds",UserSeed)



NotificationRouter.post("/Notification/User/seeds/:id",Notifications)



export default NotificationRouter