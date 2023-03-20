import { Request,Response,Router } from "express";
import{ loginCtrl, registerCtrl,forgotPassword } from '../controllers/auth'
const router = Router()

router.get("/",(req:Request,res:Response)=> {
console.log('llega la soli')
console.log('llega la soli')

   res.render('index.handlebars')
  

})


    //router.get('/', privateAccess, (req, res) => {
      //  const { user } = req.session
        //res.render('profile.handlebars', { user })
      //})
      
      //router.get('/login', publicAccess, (req, res) => {
        //res.render('login.handlebars')
      //})
      
     // router.get('/signup', publicAccess, (req, res) => {
       // res.render('signup.handlebars')
      //})



    




export{router} 