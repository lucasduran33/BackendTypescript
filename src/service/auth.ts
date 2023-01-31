import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({email,password,name}: User) => {
const check = await UserModel.findOne({email:email});
if(check){
    return "ALREADY_REGISTER_USER"
}else{
    const passHash = await encrypt(password)

const registerNewUser = await UserModel.create({email:email,password:passHash,name:name}) 
return registerNewUser
}


}
const LoginNewUser = async ({email,password}:Auth) => {
    const checkIs = await UserModel.findOne({email})
    if(!checkIs) return "NOT_FOUND_USER"
    const passwordHash = checkIs.password
    const isCorrect = await verified(password, passwordHash);
    if(!isCorrect) return "PASSWORD_INCORRECT";
    const token = await generateToken(checkIs.email)
    console.log(token, 'soy el token')
   const data = {
    token,
    user:checkIs
   }
   
    return data
}

export {registerNewUser, LoginNewUser}