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
const url_1 = __importDefault(require("../Models/url"));
function originalIdRedirector(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const shortId = req.params.id;
        console.log(shortId);
        try {
            console.log("Reached");
            const urlDocument = yield url_1.default.findOneAndUpdate({ shortId }, { $push: { visitHistory: { timestamp: Date.now() } } });
            // console.log(urlDocument);
            if (urlDocument && (urlDocument === null || urlDocument === void 0 ? void 0 : urlDocument.redirectURL)) {
                res.redirect(urlDocument === null || urlDocument === void 0 ? void 0 : urlDocument.redirectURL);
            }
            else {
                res.status(404).json({ message: "Couldn't find Original link in DB" });
            }
        }
        catch (error) {
            res.status(500).json({ message: "Error while fethching Link" });
        }
    });
}
exports.default = originalIdRedirector;
