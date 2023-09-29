"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserSignup_1 = __importDefault(require("../Controller/UserSignup"));
const userLogin_1 = __importDefault(require("../Controller/userLogin"));
const router = (0, express_1.Router)();
router.post("/", UserSignup_1.default);
router.post("/login", userLogin_1.default);
exports.default = router;
