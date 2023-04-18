import expressAsyncHandler from "express-async-handler"
import CommentModel from "../Schemas/CommentsSchema.js"
import Post from "../Schemas/PostSchema.js"
import Notification from "../Schemas/NotificationSchema.js"
import User from "../Schemas/UserSchema.js";

const CommentMsgControll=expressAsyncHandler(async(req,res)=>{
  
    try {
        const commentbody=req.body
      const CommentsOFpost= new CommentModel(commentbody)
      const savecommentIdinPOstSchema=await Post.findById(req.body.postId).populate("author")
      console.log(savecommentIdinPOstSchema)
      // if (savecommentIdinPOstSchema.author._id===req.body.CommentOwner) {
      //   return}
      if (savecommentIdinPOstSchema) {
        const savecommented= await (await CommentsOFpost.save()).populate('CommentOwner')
        savecommentIdinPOstSchema.comments.push(savecommented._id)
        
        await savecommentIdinPOstSchema.save()
       
        const SavenotiInuserAcc=await User.findById(savecommentIdinPOstSchema.author._id)
        if (SavenotiInuserAcc!==req.body.CommentOwner) {
          let notification={
            recipientID:savecommentIdinPOstSchema.author._id,
            senderID:req.body.CommentOwner,
            TypeofNoti:"comment",
            messages:`${savecommented.CommentOwner.first_name+"has commented on your post"+savecommentIdinPOstSchema._id}`,
            postID:req.body.postId,
          }
          const makenotification=new Notification(notification)
          
             SavenotiInuserAcc.notifications.push(makenotification._id)
          
             res.send({message:"Successfully commented"})
        }




        
      }else{
        res.status(500).send({message:"Post Not Found"})
      }
        
    } catch (error) {
        console.log({message:error.message})
        
    }



})


export default CommentMsgControll