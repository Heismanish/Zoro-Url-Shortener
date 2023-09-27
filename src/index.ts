import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./Routes/url";
import shortUrlRoute from "./Routes/shortId";
// import URLModel from "./Models/url";

// Load Environment variables
dotenv.config();

// creating the server
const app = express();
app.use(express.json());

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

app.get("/", (req: Request, res: Response) =>
	res.json({ msg: "Home of the server" })
);

// starting the server
app.listen(PORT, () => {
	console.log(`Server running in port ${PORT}`);
});
