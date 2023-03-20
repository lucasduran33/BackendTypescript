import {Schema,Types,model, Model } from 'mongoose'
import { User } from '../interfaces/user.interface';

const UserSchema = new Schema<User>({
name:{
    type: String,
    required:true,
},
last_name:{
    type: String,
    required:true,
},
password:{
    type:String,
    required:true,

},
email:{
    type: String,
    required:true,
    unique: true, 
},
age:{
    type: Number,
   deafult: 18
},
},
{
    timestamps:true,
    versionKey:false,
})


const UserModel = model('user', UserSchema)

export default UserModel;