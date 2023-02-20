import {Router} from "express"
import { getOrder } from "../controllers/order";
import { checkJwt } from "../middleware/session";
//ONLY JWT ROUTE
const router = Router();


router.get('/',checkJwt,getOrder)

export{ router }