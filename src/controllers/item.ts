import { Request,Response } from "express"
import { insertProduct, getAllProduct, getProductId, updateProductById,deleteProductById} from "../service/item"
import { handleHttp } from "../utils/error.handle"






const getProducts = async (req:Request, res:Response) => {
    try{

const resProduct = await getAllProduct();



res.status(200).send(resProduct)
    }  catch(e){
               handleHttp(res,'ERROR_GET_Products')

    } 
}

const getIdProduct = async (req:Request, res:Response) => {
    try{
        const {id} = req.params
        const resProductId = await getProductId(id);
        console.log(resProductId)
res.status(200).send(resProductId)
    }  catch(e){
               handleHttp(res,'ERROR_GET_Products')

    } 
}

const postProduct = async (req :Request, res:Response) => {
    try{
      let  {
            name,
            price,
            description,
            image,
        } = req.body
    let product = {name,price,description,image}
         insertProduct(product)
        res.send(product)
    }  catch(e){
        handleHttp(res,'ERROR_POsT_Products', e)

    } 
}


const updateProduct = async(req:Request, res:Response) => {
    try{
        let {id} = req.params
        let  {
            name,
            price,
            description,
            image,
        } = req.body

    let product = {name,price,description,image}

   let response = await updateProductById(id, product)

    res.send(response)

    }  catch(e){
        handleHttp(res,'ERROR_UPDATE_Products')
    } 
}
const deleteProduct = async (req:Request, res:Response) => {
    try{
        let {id} = req.params
        let response = await deleteProductById(id)
        res.send(response)
    }  catch(e){
        handleHttp(res,'ERROR_DELETE_Products')
    } 
}

export {getIdProduct,getProducts,postProduct,updateProduct,deleteProduct} ; 