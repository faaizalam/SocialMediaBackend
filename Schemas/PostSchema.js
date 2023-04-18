import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: function() {
        return !this.images || this.images.length === 0;
      },
    },
    images: [
      {
        type: String,
        required: function() {
          return !this.content;
        },
      },
    ],
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
    mentions:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Mentions"

      }
    ],
    comments:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comments"
      }
    ],
    Likes:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like"
      }
    ],
   
    commentsCount: {
      type: Number,
      default: 0,
    },
    likesCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
export default Post;
