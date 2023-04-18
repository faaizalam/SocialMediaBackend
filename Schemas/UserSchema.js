import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone_number: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    bio: { type: String, maxlength: 160 },
    profile: { type: String, default: './DefaultImages/Defaultimg.png' },
    Date_Of_Birth: { type: Date },
    cover_photo: { typeo: String },
    socialMedia: {
        twitter: {
            type: String,
        },
        facebook: {
            type: String,
        },
        instagram: {
            type: String,
        },
    },


    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    //   this post filed will store the id of post when this user will create the post to keep track of all posts created by this user document one to many
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
        },
    ],

    isPrivate: {
        type: Boolean,
        default: false,
    },

    //   this notification  filed will store the id of notification  when for this user notification will be created ,to keep track of all notification created by this user document one to many
    notifications: [
        {
            
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Notification',
        },
    ],

}, { timestamps: true })

const User = mongoose.model("User", UserSchema)
export default User