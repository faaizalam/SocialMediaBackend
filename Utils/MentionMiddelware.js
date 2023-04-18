import Mention from "../Schemas/MentionSchema.js"
import Notification from "../Schemas/NotificationSchema.js"
import User from "../Schemas/UserSchema.js"

export const mentionmidleware=(async(req,res,Saved)=>{
    const {author,content,tags,isMentioningArr}=req.body
    let s=[]
    let e=[]
   let againstartfrom=-1
  if (content.trim()) {

    const mentionARRays=content.split(" ")
    console.log(mentionARRays)
    // for each for name array
    
    for (const mentionNames of mentionARRays) {
      
      
      // finding name with @
      if (mentionNames.startsWith('@')) {
        let StartIndex=content.indexOf(mentionNames,againstartfrom+1)
        s.push(StartIndex)
        let EndIndex=StartIndex+mentionNames.length
        e.push(EndIndex)
        againstartfrom=EndIndex
       
    }
    }
 let t=-1
    if (content.includes("@")) {
      
    
    for (const findmentuser of isMentioningArr) {
      t++

          
      const findinguser = await User.findOne({first_name:findmentuser.name,_id:findmentuser._id})
      // const findiFAlreadySaved = await Mention.findOne({mentionName:findinguser._id,postId:Saved._id})
     if ((findinguser && findinguser.first_name)) {
        
        //  userFound = true;
        const MentionSaving= new Mention({
          postId:Saved._id,
          mentionName:findinguser._id,
          StartIndex:s[t],
          EndIndex:e[t]
  
        })
        const savingMENTIONS= await MentionSaving.save()
        console.log(savingMENTIONS._id)
        Saved.mentions.push(savingMENTIONS._id)
        await Saved.save()
        // savedMentions.push(findmentuser._id);
      
        const NotificationForMention= new Notification({
          recipientID:findinguser._id,
          senderID:author,
          TypeofNoti:"mention",
          // FollowRequest:isFollowRequest,
          messages:`${Saved.author.first_name} has mentioned you in the post ${Saved._id}`
      })
      
     
        const Notifyid= await NotificationForMention.save()
        findinguser.notifications.push(Notifyid._id)
        await findinguser.save()
       
        
    
  }
   
  }
     
}
    
  }

})