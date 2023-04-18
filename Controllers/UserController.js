// import express from "express";
// import UserRouter from "../Router/UserRouter.js";

// const app =express()
// app.use("/register",UserRouter)
import express from "express"
import User from "../Schemas/UserSchema.js"
import { userdata } from "../Seeds/user.js"
import expressAsyncHandler from "express-async-handler"


// const UserRouter=express.Router()

export const UserSeed = expressAsyncHandler(async(req,res)=>{
    const UserData=await User.insertMany(userdata)
    res.send(UserData)

})



// export default UserRouter