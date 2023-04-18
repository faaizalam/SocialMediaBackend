import express from "express";
import CommentMsgControll from "../Controllers/CommentsControll.js";


export const CommentRouter=express.Router()


CommentRouter.post("/postman/Comments",CommentMsgControll)