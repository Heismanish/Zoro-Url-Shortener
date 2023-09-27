"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const url_1 = __importDefault(require("../Controller/url"));
const handleAnalytics_1 = __importDefault(require("../Controller/handleAnalytics"));
const router = express_1.default.Router();
router.post("/", url_1.default);
router.get("/analytics/:shortId", handleAnalytics_1.default);
exports.default = router;
