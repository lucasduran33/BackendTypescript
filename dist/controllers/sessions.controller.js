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
exports.sessionInfo = exports.logoutSession = exports.counterSession = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
const counterSession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.session.counter) {
        req.session.counter = 1;
        res.json({ message: "Bienvenido" });
    }
    else {
        req.session.counter++;
        res.json({ message: `Visitado ${req.session.counter}` });
    }
});
exports.counterSession = counterSession;
const sessionInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: req.session });
});
exports.sessionInfo = sessionInfo;
const logoutSession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.session.destroy(err => {
        if (err) {
            return res.json({ err });
        }
        else {
            res.json({ message: "sesion Finalizada" });
        }
    });
});
exports.logoutSession = logoutSession;
