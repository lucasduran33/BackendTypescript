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
exports.forgotPassword = exports.loginCtrl = exports.registerCtrl = void 0;
const auth_1 = require("../service/auth");
const registerCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, last_name, age, email, password, } = req.body;
        const newUser = {
            name,
            last_name,
            age,
            email,
            password
        };
        console.log(newUser, 'soy newUser');
        const responseUser = yield (0, auth_1.registerNewUser)(newUser);
        if (typeof responseUser === "string") {
            // Si registerNewUser devuelve "ALREADY_REGISTER_USER",
            // se devuelve un mensaje de error al cliente
            return res.status(400).send(responseUser);
        }
        else {
            // Si registerNewUser devuelve un objeto de tipo User,
            // se devuelve la respuesta al cliente
            return res.status(200).send(responseUser);
        }
    }
    catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ error: "El usuario ya existe" });
        }
        else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});
exports.registerCtrl = registerCtrl;
const loginCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const responseUser = yield (0, auth_1.LoginNewUser)({ email, password });
        if (responseUser === "PASSWORD_INCORRECT") {
            res.status(400).send(responseUser).json(({ error: 'Usuario y contraseña No coinciden' }));
        }
        else if (responseUser === "NOT_FOUND_USER" || responseUser === undefined) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        else {
            console.log('Estoy en la parte de sesion');
            console.log(responseUser);
            req.session.user = {
                name: responseUser.user.name,
                last_name: responseUser.user.last_name,
                email: responseUser.user.email
            };
            res.status(201).send(responseUser).json({ message: 'Sesion iniciada' });
        }
    }
    catch (error) {
        console.log(error);
        res.json({ message: "INTERNAL_SERVER_ERROR" });
    }
});
exports.loginCtrl = loginCtrl;
const forgotPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.forgotPassword = forgotPassword;
