import { Request, Response } from "express"
import { registerNewUser } from "../service/auth"

const registerCtrl = async(req:Request, res:Response) => {
const {body} = req
const responseUser = await registerNewUser(body)
}

const loginCtrl = (req:Request, res:Response) => {
    
}

export{ registerCtrl, loginCtrl}