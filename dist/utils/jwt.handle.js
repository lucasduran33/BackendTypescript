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
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SE = process.env.JWT_S || "token.010101";
console.log(JWT_SE);
const generateToken = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const jwt = (0, jsonwebtoken_1.sign)({ id }, JWT_SE, { expiresIn: "2h" });
    return jwt;
});
exports.generateToken = generateToken;
const verifyToken = (jwt) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(jwt, 'soy jwt del verify');
        const isOk = yield (0, jsonwebtoken_1.verify)(jwt, JWT_SE);
        return isOk;
    }
    catch (e) {
        console.log(e, 'is not possible enable connection');
    }
});
exports.verifyToken = verifyToken;
