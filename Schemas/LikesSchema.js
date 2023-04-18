import mongoose from "mongoose";

const LikeSchema =new mongoose.Schema({
    postId:{type:mongoose.Schema.Types.ObjectId,ref:'Post'},
    likeowner:{type:mongoose.Schema.Types.ObjectId,unique:true,ref:'User'},

})
const LikeModel=mongoose.model("Like",LikeSchema)
export default LikeModel