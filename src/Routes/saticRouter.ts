import { Request, Response, Router } from "express";
import URLModel from "../Models/url";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
	if (!req.body.user) {
		res.redirect("/login");
	}
	let createdBy;

	if (req.body.user && req.body.user._id) {
		createdBy = req.body.user._id;
		console.log("akjfjb");
	}

	const urls = await URLModel.find({ createdBy });
	console.log(urls);
	res.render("home", { urls });
});

router.get("/signup", (req: Request, res: Response) => {
	console.log("reached signup");
	res.render("signup");
});

router.get("/login", (req: Request, res: Response) => {
	console.log("reached login");
	res.render("login");
});

export default router;
