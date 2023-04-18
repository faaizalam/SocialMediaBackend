import mongoose from "mongoose";


const CommentsSchema =new mongoose.Schema({
    postId:{type:mongoose.Schema.Types.ObjectId,ref:'Post'},
    CommentOwner:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    CommentMsg:{type:String,required:true},
    DateTime:{type:Date,default:Date.now},
    replies: [{
        replyOwner: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        replyMsg: {
          type: String,
          required: true
        },
        dateTime: {
          type: Date,
          default: Date.now
        }
      }]
})
const CommentModel=mongoose.model("Comments",CommentsSchema)
export default CommentModel