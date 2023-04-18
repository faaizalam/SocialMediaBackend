import expressAsyncHandler from "express-async-handler"
import express  from "express"
import multer from "multer"
import bodyParser from 'body-parser'
import PostRouterControll from "../Controllers/PostControll.js"
// import { Tagmiddle } from "../Utils/Middleware.js"


const app = express()
const uploadrouter=express.Router()
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null,Date.now() +'-' + file.originalname)
    }

})

const maxSize = 1 * 1024 * 1024;
const fileFilter = function (req, file, cb) {
    const allowedTypes=['image/jpeg','image/png']
    if(!allowedTypes.includes(file.mimetype)){
        const error=new Error("only jpg and png files are allowd")
         error.code='LIMIT_FILE_TYPES'
         return cb(error,false)
    }
    if (file.size>maxSize) {
          const error = new Error(`File size should be less than ${maxSize} bytes`);
      error.code = 'LIMIT_FILE_SIZE';
      return cb(error, false);
        
    }
   cb(null,true)
  
  };



const upload=multer({storage:storage,fileFilter:fileFilter})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

uploadrouter.post('/postman/NewPost/upload',upload.array('image[]'),PostRouterControll)


export default uploadrouter
