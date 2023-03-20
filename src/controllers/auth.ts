import { Request, response, Response } from "express"
import { User } from "../interfaces/user.interface"
import { LoginNewUser, registerNewUser } from "../service/auth"
import { CustomSession } from '../interfaces/session.interface'
import UserModel from "../models/user"

const registerCtrl = async(req:Request, res:Response) => {
    try{
        const {
            name,
            last_name,
            age,
            email,
            password,
            }: User = req.body
            
            const newUser = {
            name,
            last_name,
            age,
            email,
            password
            }
            console.log(newUser, 'soy newUser')
            const responseUser  = await registerNewUser(newUser)
            if (typeof responseUser === "string") {
                // Si registerNewUser devuelve "ALREADY_REGISTER_USER",
                // se devuelve un mensaje de error al cliente
                return res.status(400).send(responseUser);
              }else {
               // Si registerNewUser devuelve un objeto de tipo User,
              // se devuelve la respuesta al cliente
              return res.status(200).send(responseUser);
              }
          
            }
    catch(error : any){
 if(error.code === 11000){res.status(400).json({error: "El usuario ya existe" })
}else{
    res.status(500).json({error:'Internal server error'})
}
         
    }
}


const loginCtrl = async (req:Request  & {session: CustomSession}, res:Response) => {
    try{
        const {email, password} = req.body
        const responseUser = await LoginNewUser({email,password})
        if(responseUser === "PASSWORD_INCORRECT"){
            res.status(400).send(responseUser).json(({error: 'Usuario y contraseña No coinciden'}))
        }else if (responseUser === "NOT_FOUND_USER" || responseUser === undefined){
            return  res.status(404).json({error: "Usuario no encontrado"})
        } else{
            console.log('Estoy en la parte de sesion')

            console.log(responseUser)
            req.session.user = {
                name : responseUser.user.name,
                last_name : responseUser.user.last_name,
                email: responseUser.user.email
            }
            res.status(201).send(responseUser).json({message: 'Sesion iniciada'})
        }
     
    }catch(error){
        console.log(error)
         res.json({message: "INTERNAL_SERVER_ERROR"})
    }
   

}


const forgotPassword = async (req:Request, res:Response)=> {

}

export{ registerCtrl, loginCtrl,forgotPassword}