import  express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRouter from './Router/UserRouter.js'
import NotificationRouter from './Router/NotificationRouter.js'
import uploadrouter from './Router/PostRouter.js'
import { CommentRouter } from './Router/CommentRouter.js'




// Connecting env
dotenv.config()


// Connecting express
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(UserRouter)
app.use(NotificationRouter)
app.use(uploadrouter)
app.use(CommentRouter)


mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("connected")
}).catch((error)=>{
    console.log(error.message)
})
const port = 5000

// Connecting to listen server
let t="hello bro @faaiz did you meetss @jaaiz noise boss @don"
// r=['hello','bro','@faaiz','did','you','meet','@juniad']
//   start=2+10
// console.log(t.split(' '))



let lastin=0
t.split(' ').forEach((w,i)=>{
  
    if (w.startsWith("@")) {
        let start=t.indexOf(w,lastin)
        let end=start+w.length
        lastin=end
        // console.log(lastin,"m,e")
        
        
        console.log(i,start,end,lastin)
    }
    // let n='@faaiz'
    // console.log(start,end,t.slice(7,12))

})


app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})