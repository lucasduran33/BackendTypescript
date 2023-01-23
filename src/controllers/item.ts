import { Request,Response } from "express"
import { handleHttp } from "../utils/error.handle"
const getItem = (req:Request, res:Response) => {
 try{

 }  catch(e){
    handleHttp(res,'EEROR_GET_ITEM')
 } 
}


const getItems = (req:Request, res:Response) => {
    try{

    }  catch(e){
               handleHttp(res,'EEROR_GET_ITEMS')

    } 
}
const postItem = (req:Request, res:Response) => {
    try{

    }  catch(e){
        handleHttp(res,'EEROR_GET_ITEMS')

    } 
}
const updateItem = (req:Request, res:Response) => {
    try{

    }  catch(e){
        handleHttp(res,'EEROR_UPDATE_ITEMS')
    } 
}
const deleteItem = (req:Request, res:Response) => {
    try{

    }  catch(e){
        handleHttp(res,'EEROR_DELETE_ITEMS')
    } 
}

export {getItem,getItems,postItem,updateItem,deleteItem} ; 