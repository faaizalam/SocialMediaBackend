import Notification from "../Schemas/NotificationSchema.js"
import Tagsmodel from "../Schemas/TagsSchema.js"
import User from "../Schemas/UserSchema.js"


export const Tagmiddle=(async(req,res,Saved)=>{
 const {author,content,tags,isMentioningArr}=req.body
    if (Array.isArray(tags) && tags.length>0) {
        for (const ele of tags) {
          
        
        
          
            const TagsData=  new Tagsmodel({
                postId:Saved._id,
                Tagowner:ele.ownerID,
                name:ele.name
            })
            const SaveingTag= await TagsData.save()
            Saved.tags.push(SaveingTag._id)
           await Saved.save()
         
            if (SaveingTag) {
              // console.log(isTypeofNoti,"yes")
                const NotificationForTAg=new Notification({
                    recipientID:ele.ownerID,
                    senderID:author,
                    TypeofNoti:'tag',
                    // FollowRequest:isFollowRequest,
                    messages:`${Saved.author.first_name} has tagged you in the post ${Saved._id}`
                })
              const SaveingNotification= await NotificationForTAg.save()
                
                const pushingTagnotificationUser= await User.findById(ele.ownerID)
                // console.log(pushingTagnotificationUser,"found user")
                if (pushingTagnotificationUser) {
                   pushingTagnotificationUser.notifications.push(SaveingNotification._id)
                  await pushingTagnotificationUser.save()
                    
                }else{
                  return res.send({message:"one of them user not found to be notified"})
                }
                
            }
            
        }
        
      }

})