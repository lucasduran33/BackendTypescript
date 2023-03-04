"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logHandle = void 0;
const logHandle = (req, res, next) => {
    next();
};
exports.logHandle = logHandle;
