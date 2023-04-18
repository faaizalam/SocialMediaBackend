import express from "express"
import { UserSeed } from "../Controllers/UserController.js"


const UserRouter=express.Router()
UserRouter.post("/register/User/seeds",UserSeed)







export default UserRouter



