import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./Routes/url";
import shortUrlRoute from "./Routes/shortId";
import path from "path";
import URLModel from "./Models/url";
import StaticRouter from "./Routes/saticRouter";

// Load Environment variables
dotenv.config();

// creating the server
const app = express();
app.use(express.json()); // to read body
app.use(express.urlencoded());

// Configuring our env variables:
const PORT = process.env.PORT || 3001;
const MONGO_URI =
	process.env.MONGO_URI || "mongodb://localhost:27017/URL-Shortrner";

// Connecting DB:
mongoose
	.connect(MONGO_URI, {})
	.then(() => {
		console.log("Connected to DB");
	})
	.catch(() => {
		console.log("Error while connecting to db");
	});

// Setting up routes:
app.use("/url", router);
app.use("/", shortUrlRoute);
app.use("/", StaticRouter);

// setting up our view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/View"));

// app.get("/", async (req: Request, res: Response) => {
// 	const urls = await URLModel.find({});
// 	console.log(urls);
// 	res.render("home", { urls });
// });

app.get("/test", (req: Request, res: Response) =>
	res.json({ msg: "Home of the server" })
);

// starting the server
app.listen(PORT, () => {
	console.log(`Server running in port ${PORT}`);
});
