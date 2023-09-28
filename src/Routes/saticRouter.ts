import express, { Request, Response, Router } from "express";
import URLModel from "../Models/url";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
	const urls = await URLModel.find({});
	console.log(urls);
	res.render("home", { urls });
});

export default router;
