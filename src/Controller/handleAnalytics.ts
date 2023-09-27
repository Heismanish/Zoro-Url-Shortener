import { Request, Response } from "express";
import URLModel from "../Models/url";

async function handleAnalytics(req: Request, res: Response) {
	const shortId = req.params.shortId;
	try {
		const url = await URLModel.findOne({
			shortId,
		});
		console.log(url);
		res.json({ history: url?.visitHistory, clicks: url?.visitHistory.length });
	} catch (error) {
		res.status(500).json({ message: "Error while fethcing analytics" });
	}
}

export default handleAnalytics;
