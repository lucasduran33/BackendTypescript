"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const sessions_controller_1 = require("../controllers/sessions.controller");
const accessRoute_1 = require("../middleware/accessRoute");
//ONLY JWT ROUTE
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', sessions_controller_1.counterSession);
router.get('/logout', sessions_controller_1.logoutSession);
router.get('/info', accessRoute_1.privateRoute, sessions_controller_1.sessionInfo);
