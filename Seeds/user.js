import bcrypt from 'bcryptjs'

export const userdata=[
    {
    first_name:"juniad",
    last_name:"alam",
    phone_number:'032998822',
    email:"juniadalam1999@gmail.com",
    password: bcrypt.hashSync("faaiz",8),
    isAdmin:false
    
    
   
},
    {
    first_name:"faaiz",
    last_name:"alam",
    phone_number:'1220329988',
    email:"faaizalam1999@gmail.com",
    password: bcrypt.hashSync("faaiz",8),
    isAdmin:false
    
    
   
},
{
    first_name:"alam",
    last_name:"alam",
    phone_number:'0900786',
    email:"alam1999@gmail.com",
    password: bcrypt.hashSync("faaiz",8),
    isAdmin:false
    
    
   
}

]