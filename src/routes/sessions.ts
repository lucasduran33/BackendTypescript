import {Router} from "express"
import { counterSession, logoutSession, sessionInfo } from "../controllers/sessions.controller";
import { privateRoute } from "../middleware/accessRoute";

//ONLY JWT ROUTE
const router = Router();
router.get('/', counterSession)
router.get('/logout', logoutSession)
router.get('/info',privateRoute,sessionInfo)

export{ router }