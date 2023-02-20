import { JwtPayload } from "jsonwebtoken";
import {Request} from "express"
interface RequestExt extends Request{
    user?:string | JwtPayload,
}


export {RequestExt}