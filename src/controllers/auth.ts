import { Request, Response } from "express"
import { User } from "../interfaces/user.interface"
import { LoginNewUser, registerNewUser } from "../service/auth"

const registerCtrl = async(req:Request, res:Response) => {
const {body} = req
console.log(body, 'soy body')
const responseUser  = await registerNewUser(body)

if (typeof responseUser === "string") {
    // Si registerNewUser devuelve "ALREADY_REGISTER_USER",
    // se devuelve un mensaje de error al cliente
    return res.status(400).send(responseUser);
  }
  // Si registerNewUser devuelve un objeto de tipo User,
  // se devuelve la respuesta al cliente
  return res.status(200).send(responseUser);
};


const loginCtrl = async (req:Request, res:Response) => {
    const {email, password} = req.body
    const responseUser = await LoginNewUser({email,password})
    if(responseUser === "PASSWORD_INCORRECT"){
        
        res.status(403).send(responseUser)
    }else{
        res.send(responseUser)
    } 

}

export{ registerCtrl, loginCtrl}