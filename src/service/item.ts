import { Product } from "../interfaces/item";
import ProductModel from "../models/items";

const  insertProduct = async (product: Product) => {
    const responseInsert = await ProductModel.create(product)
    return responseInsert;
}

const getAllProduct = async () => {
const responseProduct = await ProductModel.find({})
return responseProduct
}


const getProductId = async (_id: string) => { //modificar type
    const responseIdProduct = await ProductModel.findOne({_id})
    return responseIdProduct
}


const updateProductById = async (id: string, data: Product) => {
    const responseIdProduct = await ProductModel.findOneAndUpdate({_id: id}, data,{new:true}) //Responde objeto ya actualizado
    return responseIdProduct
}

const deleteProductById = async (id:string) => {
    const responseIdProduct = await ProductModel.remove({_id:id})
    return responseIdProduct
}

export {insertProduct, getAllProduct, getProductId,updateProductById, deleteProductById};