import { Response,Request, NextFunction } from "express"

const logHandle = (req:Request, res:Response , next: NextFunction) => {
next();
}


export {logHandle}