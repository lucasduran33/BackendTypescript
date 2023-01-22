"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Application {
    constructor() {
        this.app = (0, express_1.default)();
    }
    start() {
        const PORT = 3000;
        this.app.listen(PORT, () => {
            console.log(`Server On in LocalHost ${PORT} `);
        });
    }
}
exports.default = Application;