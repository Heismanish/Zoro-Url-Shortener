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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../Models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const uuid_1 = require("uuid");
const auth_1 = require("../service/auth");
function userLogin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        try {
            const userInDB = yield user_1.default.findOne({ email });
            if (!userInDB) {
                return res
                    .status(404)
                    .render("login", { message: "User not found in db" });
            }
            const isPasswordValid = yield bcrypt_1.default.compare(password, userInDB.password);
            console.log("Login route working");
            if (!isPasswordValid) {
                return res.status(401).render("login", { message: "Invalid Password" });
            }
            // CREATING SESSION ID:
            const sessionId = (0, uuid_1.v4)();
            (0, auth_1.setUser)(sessionId, userInDB);
            res.cookie("uid", sessionId);
            return res.redirect("/");
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: "Error occured while sign-in" });
        }
    });
}
exports.default = userLogin;
