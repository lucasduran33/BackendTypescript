"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRoute = exports.privateRoute = void 0;
function privateRoute(req, res, next) {
    if (!req.session.user) {
        res.redirect('/login');
        return res.json({ message: "No puede ver esto" });
    }
    else {
        next();
    }
}
exports.privateRoute = privateRoute;
function publicRoute(req, res, next) {
    if (req.session.user) {
        res.redirect('/');
    }
    else {
        next();
    }
}
exports.publicRoute = publicRoute;
