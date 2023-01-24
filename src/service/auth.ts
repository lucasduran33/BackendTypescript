import { User } from "../interfaces/user.interface";

import UserModel from "../models/user"

const registerNewUser = async ({email,password,name}: User) => {
const check = await UserModel.findOne({email:email});
if(check){
    return "ALREADY_REGISTER_USER"
}else{
const registerNewUser = await UserModel.create(email,password,name) 
return registerNewUser
}


}
const LoginNewUser = async () => {
    
}

export {registerNewUser, LoginNewUser}