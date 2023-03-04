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
exports.loginCtrl = exports.registerCtrl = void 0;
const auth_1 = require("../service/auth");
const registerCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    console.log(body, 'soy body');
    const responseUser = yield (0, auth_1.registerNewUser)(body);
    if (typeof responseUser === "string") {
        // Si registerNewUser devuelve "ALREADY_REGISTER_USER",
        // se devuelve un mensaje de error al cliente
        return res.status(400).send(responseUser);
    }
    // Si registerNewUser devuelve un objeto de tipo User,
    // se devuelve la respuesta al cliente
    return res.status(200).send(responseUser);
});
exports.registerCtrl = registerCtrl;
const loginCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const responseUser = yield (0, auth_1.LoginNewUser)({ email, password });
    if (responseUser === "PASSWORD_INCORRECT") {
        res.status(403).send(responseUser);
    }
    else {
        res.send(responseUser);
    }
});
exports.loginCtrl = loginCtrl;
