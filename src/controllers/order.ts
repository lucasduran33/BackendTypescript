import { Request, Response} from 'express'
import { handleHttp } from '../utils/error.handle'
import { RequestExt } from '../interfaces/reqext.interface'

const getOrder = async(req:RequestExt, res:Response) => {
    try{

res.send({
    data:'Only JWT allowed',
    user: req.user
})
    }catch(e){
handleHttp(res,"ERROR_GET_ORDER")
    }
}

export { getOrder}