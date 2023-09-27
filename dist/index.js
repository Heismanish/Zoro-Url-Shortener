"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const url_1 = __importDefault(require("./Routes/url"));
const shortId_1 = __importDefault(require("./Routes/shortId"));
// import URLModel from "./Models/url";
// Load Environment variables
dotenv_1.default.config();
// creating the server
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Configuring our env variables:
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/URL-Shortrner";
// Connecting DB:
mongoose_1.default
    .connect(MONGO_URI, {})
    .then(() => {
    console.log("Connected to DB");
})
    .catch(() => {
    console.log("Error while connecting to db");
});
// Setting up routes:
app.use("/url", url_1.default);
app.use("/", shortId_1.default);
app.get("/", (req, res) => res.json({ msg: "Home of the server" }));
// starting the server
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});
