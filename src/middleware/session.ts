import {NextFunction, Request, Response } from "express"
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from '../interfaces/reqext.interface'




const publicAcces = async (req: RequestExt, res:Response, next:NextFunction ) => {
next()

}




const checkJwt = async (req: RequestExt, res:Response, next:NextFunction ) => {
try{
const jwtByUser = req.headers.authorization || null;  //Cuidado con romper en null xq split is null
const jwt = jwtByUser?.split(' ').pop()
console.log(jwt,'SPLIT-POT IN USE')
const isUser = await verifyToken(`${jwt}`) // returned information about user (email)
console.log(isUser, 'Soy isOkkkk')
if(!isUser){
    res.status(401)
    res.send({data: "JWT_INVALIDATE"})
}else{
    req.user = isUser
    console.log({jwtByUser})
    next()
}
}catch(e){
    console.log(e)
    res.status(400)
    res.send("SESSION_NO_VALID")
}
}


export {checkJwt}