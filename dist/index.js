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
const path_1 = __importDefault(require("path"));
const saticRouter_1 = __importDefault(require("./Routes/saticRouter"));
const user_1 = __importDefault(require("./Routes/user"));
const userAuth_1 = require("./Middlewares/userAuth");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// Load Environment variables
dotenv_1.default.config();
// creating the server
const app = (0, express_1.default)();
app.use(express_1.default.json()); // to read body
app.use(express_1.default.urlencoded());
app.use((0, cookie_parser_1.default)());
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
// setting up our view engine to ejs
app.set("view engine", "ejs");
app.set("views", path_1.default.resolve("./src/View"));
// Setting up routes:
app.use("/", userAuth_1.userCheck, saticRouter_1.default); // render pages
app.use("/sid/", shortId_1.default); //redirect to url
app.use("/url", userAuth_1.userVerification, url_1.default); //generate url
app.use("/user", user_1.default);
// starting the server
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});
