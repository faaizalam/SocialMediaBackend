import NotificationSchema from "../Schemas/NotificationSchema.js"

import expressAsyncHandler from "express-async-handler"

export const Notifications= expressAsyncHandler(async(req,res)=>{
    // console.log(req.params.id)
  const Notification =new NotificationSchema({
    recipientID:req.body.recipientID,
    senderID:req.params.id,
    TypeofNoti:req.body.TypeofNoti,
    messages:req.body.messages,
    FollowRequest:req.body.FollowRequest
    

  })
  const Notisaving=await Notification.save()
  res.send({message:"been notified",data:Notisaving})


})