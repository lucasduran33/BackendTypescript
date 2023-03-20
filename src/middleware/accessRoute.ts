import {Router,Request,Response, NextFunction} from 'express'
import { CustomSession } from '../interfaces/session.interface'


function privateRoute (req:Request & {session: CustomSession},res:Response,next:NextFunction) {

    if (!req.session.user){
        res.redirect('/login')
        return res.json({message:"No puede ver esto"})
    }else{
        next()
    }
   }


   function publicRoute (req: Request & {session : CustomSession}, res: Response, next: NextFunction) {
    if(req.session.user){
    res.redirect('/')
    }else{
        next()
    }

    
    }
   export{privateRoute, publicRoute}

