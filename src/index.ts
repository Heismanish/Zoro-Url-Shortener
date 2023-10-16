import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./Routes/url";
import shortUrlRoute from "./Routes/shortId";
import path from "path";
import URLModel from "./Models/url";
import StaticRouter from "./Routes/saticRouter";
import UserRoute from "./Routes/user";
import { userVerification, userCheck } from "./Middlewares/userAuth";
import cookieParser from "cookie-parser";
// Load Environment variables
dotenv.config();

// creating the server
const app = express();
app.use(express.json()); // to read body
app.use(express.urlencoded());
app.use(cookieParser());

// Configuring our env variables:
const PORT = process.env.PORT || 3001;
const MONGO_URI =
	process.env.MONGO_URI || "mongodb://mongodbzoro:27017/URL-Shortrner";

// Connecting DB:
mongoose
	.connect(MONGO_URI, {})
	.then(() => {
		console.log("Connected to DB");
	})
	.catch(() => {
		console.log("Error while connecting to db");
	});

// setting up our view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/View"));

// Setting up routes:
app.use("/", userCheck, StaticRouter); // render pages
app.use("/sid/", shortUrlRoute); //redirect to url
app.use("/url", userVerification, router); //generate url
app.use("/user", UserRoute);

// starting the server
app.listen(PORT, () => {
	console.log(`Server running in port ${PORT}`);
});
