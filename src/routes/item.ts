import { Router } from "express";
import { deleteProduct, getIdProduct, getProducts, postProduct, updateProduct } from "../controllers/item";

const router = Router()

router.get("/", getProducts)
router.post("/", postProduct)
router.get("/:id", getIdProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)



export {router} ;