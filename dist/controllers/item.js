"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.postProduct = exports.getProducts = exports.getIdProduct = void 0;
const item_1 = require("../service/item");
const error_handle_1 = require("../utils/error.handle");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resProduct = yield (0, item_1.getAllProduct)();
        res.status(200).send(resProduct);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_Products');
    }
});
exports.getProducts = getProducts;
const getIdProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const resProductId = yield (0, item_1.getProductId)(id);
        console.log(resProductId);
        res.status(200).send(resProductId);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_Products');
    }
});
exports.getIdProduct = getIdProduct;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { name, price, description, image, } = req.body;
        let product = { name, price, description, image };
        (0, item_1.insertProduct)(product);
        res.send(product);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_POsT_Products', e);
    }
});
exports.postProduct = postProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { id } = req.params;
        let { name, price, description, image, } = req.body;
        let product = { name, price, description, image };
        let response = yield (0, item_1.updateProductById)(id, product);
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_UPDATE_Products');
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { id } = req.params;
        let response = yield (0, item_1.deleteProductById)(id);
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_DELETE_Products');
    }
});
exports.deleteProduct = deleteProduct;
