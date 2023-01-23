import {Request,Response, Router } from "express";

const router = Router()


router.get("/", (req:Request,res:Response) => {
    res.send({data: "aqui estamos con ls models"})
})



export {router} ;