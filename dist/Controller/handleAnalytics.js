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
function handleAnalytics(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const shortId = req.params.shortId;
        console.log(shortId);
        const url = yield url_1.default.findOne({
            shortId,
        });
        console.log(url);
        res.json({ history: url === null || url === void 0 ? void 0 : url.visitHistory, clicks: url === null || url === void 0 ? void 0 : url.visitHistory.length });
        // if () {
        // 	const clicks = url[0].visitHistory.length;
        // 	res.json({ clicks });
        // } else {
        // 	res
        // 		.status(404)
        // 		.json({ message: "URL not found or no visit history available" });
        // }
    });
}
exports.default = handleAnalytics;
