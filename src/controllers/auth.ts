import { Request, Response } from "express"
import { LoginNewUser, registerNewUser } from "../service/auth"

const registerCtrl = async(req:Request, res:Response) => {
const {body} = req
console.log(body, 'soy body')
const responseUser = await registerNewUser(body)

return res.send(responseUser).status(200)
}

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