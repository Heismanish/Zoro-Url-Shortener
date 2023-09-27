"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// export interface URLDocument extends Document {
// 	shortId: string;
// 	redirectURL: string;
// 	visitHistory: { timestamp: number }[];
// }
const urlSchema = new mongoose_1.default.Schema({
    shortId: {
        type: String,
        unique: true,
        required: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
}, { timestamps: true });
// defining model
// interface URLModel extends Model<URLDocument> {}
const URLModel = mongoose_1.default.model("URL", urlSchema);
exports.default = URLModel;
