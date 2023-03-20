import { Request,Response,Router } from "express";
import{ loginCtrl, registerCtrl,forgotPassword } from '../controllers/auth'
const router = Router()

router.post("/register",registerCtrl)
router.post("/login",loginCtrl)
router.patch('/forgotpassword',forgotPassword)


export{router} 