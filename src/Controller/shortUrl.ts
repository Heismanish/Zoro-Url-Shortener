import { Response, Request } from "express";
import URLModel from "../Models/url";

async function originalIdRedirector(req: Request, res: Response) {
	const shortId = req.params.id;
	console.log(shortId);
	try {
		console.log("Reached");
		const urlDocument = await URLModel.findOneAndUpdate(
			{ shortId },
			{ $push: { visitHistory: { timestamp: Date.now() } } }
		);

		// console.log(urlDocument);

		if (urlDocument && urlDocument?.redirectURL) {
			res.redirect(urlDocument?.redirectURL);
		} else {
			res.status(404).json({ message: "Couldn't find Original link in DB" });
		}
	} catch (error) {
		res.status(500).json({ message: "Error while fethching Link" });
	}
}

export default originalIdRedirector;
