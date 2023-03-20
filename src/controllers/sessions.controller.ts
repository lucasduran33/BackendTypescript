import {Router,Request,Response, } from 'express'
import { CustomSession } from '../interfaces/session.interface'
const router = Router()

const counterSession = async(req:Request & { session: CustomSession }, res:Response)=> {
    if(!req.session.counter){
        req.session.counter = 1
        res.json({message: "Bienvenido"}) 
    }else{
        req.session.counter ++
        res.json({message: `Visitado ${req.session.counter}`})
    }
    
} 
const sessionInfo =  async(req:Request & {session: CustomSession}, res:Response)=> {
   res.json({message: req.session})
    }
 
 
const logoutSession =  async(req:Request, res:Response)=> {
   req.session.destroy(err => {
    if (err){
        return res.json({err})
    }else{
        res.json({message:"sesion Finalizada"})
    }
   })
} 



export {counterSession,logoutSession,sessionInfo}