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
const express_1 = require("express");
const url_1 = __importDefault(require("../Models/url"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.user) {
        res.redirect("/login");
    }
    let createdBy;
    if (req.body.user && req.body.user._id) {
        createdBy = req.body.user._id;
        console.log("akjfjb");
    }
    const urls = yield url_1.default.find({ createdBy });
    console.log(urls);
    res.render("home", { urls });
}));
router.get("/signup", (req, res) => {
    console.log("reached signup");
    res.render("signup");
});
router.get("/login", (req, res) => {
    console.log("reached login");
    res.render("login");
});
exports.default = router;
