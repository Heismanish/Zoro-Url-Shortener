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
const nanoid_1 = require("nanoid");
const url_1 = __importDefault(require("../Models/url"));
// import url from "../Models/url";
function generateShortURL(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const originalUrl = req.body.url;
        if (!originalUrl) {
            return res.status(400).json({ message: "URL is required" });
        }
        const shortId = (0, nanoid_1.nanoid)(8);
        try {
            const url = yield url_1.default.create({
                shortId,
                redirectURL: originalUrl,
                visitHistory: [],
            });
            // res.json({ message: "short id has been created ", shortId: url.shortId });
            res.render("home", { id: url.shortId });
        }
        catch (error) {
            console.error("Some error occured during generating short id", error);
            res
                .status(500)
                .json({ message: "Some error occured during generating short id" });
        }
    });
}
exports.default = generateShortURL;
