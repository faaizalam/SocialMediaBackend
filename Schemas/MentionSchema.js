import mongoose from "mongoose";

const MentionSchema=new mongoose.Schema({
    postId:{type:mongoose.Schema.Types.ObjectId,
          ref:"Post"
        },
        mentionName:{type:mongoose.Schema.Types.ObjectId,
            ref:"User"},
            StartIndex:{
                type:Number,
                required:true
            },
            EndIndex:{
                type:Number,
                required:true
            },
    },{timestamps:true})




const Mention=mongoose.model("Mentions",MentionSchema)
export default Mention
