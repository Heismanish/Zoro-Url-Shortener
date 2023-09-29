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
exports.userCheck = exports.userVerification = void 0;
const auth_1 = require("../service/auth");
function userVerification(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const sessionId = req.cookies.uid;
        if (!sessionId) {
            return res.status(403).redirect("/login");
        }
        const userData = (0, auth_1.getUser)(sessionId);
        if (!userData) {
            return res.status(404).redirect("/login");
        }
        req.body.user = userData;
        next();
    });
}
exports.userVerification = userVerification;
function userCheck(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const sessionId = req.cookies.uid;
        const userData = (0, auth_1.getUser)(sessionId);
        req.body.user = userData;
        next();
    });
}
exports.userCheck = userCheck;
