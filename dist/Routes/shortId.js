"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shortUrl_1 = __importDefault(require("../Controller/shortUrl"));
const router = express_1.default.Router();
router.get("/:id", shortUrl_1.default);
exports.default = router;
