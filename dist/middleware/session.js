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
exports.checkJwt = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
const publicAcces = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    next();
});
const checkJwt = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jwtByUser = req.headers.authorization || null; //Cuidado con romper en null xq split is null
        const jwt = jwtByUser === null || jwtByUser === void 0 ? void 0 : jwtByUser.split(' ').pop();
        console.log(jwt, 'SPLIT-POT IN USE');
        const isUser = yield (0, jwt_handle_1.verifyToken)(`${jwt}`); // returned information about user (email)
        console.log(isUser, 'Soy isOkkkk');
        if (!isUser) {
            res.status(401);
            res.send({ data: "JWT_INVALIDATE" });
        }
        else {
            req.user = isUser;
            console.log({ jwtByUser });
            next();
        }
    }
    catch (e) {
        console.log(e);
        res.status(400);
        res.send("SESSION_NO_VALID");
    }
});
exports.checkJwt = checkJwt;
