import mongoose from "mongoose";



const NotificationSchema=new mongoose.Schema({
    recipientID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    senderID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    
    TypeofNoti:{
        type:String,
        enum:['like','comment','followreq','followaccept','tag','mention'],
        required:true
    },
    isRead:{
        type:Boolean,
        default:false
    },
    messages:{
        type:String,
        required:true
    },
    FollowRequest:{
        type:Boolean,
        required:true,
        default:false
    },
    postID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
      },



},{timestamps:true})

const Notification=mongoose.model("Notification",NotificationSchema)
export default Notification 
