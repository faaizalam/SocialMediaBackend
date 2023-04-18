import Notification from "../Schemas/NotificationSchema.js";
import Post from "../Schemas/PostSchema.js"
import Tagsmodel from "../Schemas/TagsSchema.js";
import User from "../Schemas/UserSchema.js";
import { userdata } from "../Seeds/user.js"
import expressAsyncHandler from "express-async-handler"
import Mention from "../Schemas/MentionSchema.js";
import { Tagmiddle } from "../Utils/TAGMiddleware.js";
import { mentionmidleware } from "../Utils/MentionMiddelware.js";

const PostRouterControll=expressAsyncHandler(async(req,res)=>{
  
    
  
  const {author,content,tags,isMentioningArr}=req.body

let images=[]
console.log(req.files)
req.files.forEach(element => {
images.push(element.path)
    });

  const SMPOSTS= new Post({
    author:author,
    content:content,
    images:images,


  })

  const Saved=await (await SMPOSTS.save()).populate("author")
  // console.log(Saved)
  
  // For TAGGING IN POST IF THEY ARE
  
 await Tagmiddle(req,res,Saved)

// For MENTION IN POST IF THEY ARE

await mentionmidleware(req,res,Saved)

  
  




   if (Saved) {
    
     res.send({message:"post has been posted"})
   }
   
    
  



  
})

export default PostRouterControll
