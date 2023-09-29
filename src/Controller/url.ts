import { Request, Response } from "express";
import { nanoid } from "nanoid";
import URLModel from "../Models/url";
// import url from "../Models/url";

async function generateShortURL(req: Request, res: Response) {
	const originalUrl = req.body.url;

	if (!originalUrl) {
		return res.status(400).json({ message: "URL is required" });
	}

	const shortId = nanoid(8);
	let createdBy;
	console.log("Hola Mola Pola Sola Zola");
	console.log(req.body.user);

	if (req.body.user && req.body.user._id) {
		createdBy = req.body.user._id;
		console.log("akjfjb");
	}

	try {
		const url = await URLModel.create({
			shortId,
			redirectURL: originalUrl,
			visitHistory: [],
			createdBy,
		});
		console.log(shortId);
		// res.json({ message: "short id has been created ", shortId: url.shortId });
		res.render("home", { id: url.shortId });
	} catch (error) {
		console.error("Some error occured during generating short id", error);
		res
			.status(500)
			.json({ message: "Some error occured during generating short id" });
	}
}

export default generateShortURL;
