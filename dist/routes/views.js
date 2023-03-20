"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (req, res) => {
    console.log('llega la soli');
    console.log('llega la soli');
    res.render('index.handlebars');
});
