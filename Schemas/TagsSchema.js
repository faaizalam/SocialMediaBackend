import mongoose from "mongoose";

const TagsSchema =new mongoose.Schema({
    postId:{type:mongoose.Schema.Types.ObjectId,ref:'Post'},
    Tagowner:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    name:{type:String,required:true}

})
const Tagsmodel=mongoose.model("Tag",TagsSchema)
export default Tagsmodel
