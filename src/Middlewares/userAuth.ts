import { NextFunction, Request, Response } from "express";
import { getUser } from "../service/auth";

async function userVerification(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const sessionId = req.cookies.uid;
	if (!sessionId) {
		return res.status(403).redirect("/login");
	}
	const userData = getUser(sessionId);
	if (!userData) {
		return res.status(404).redirect("/login");
	}

	req.body.user = userData;

	next();
}

async function userCheck(req: Request, res: Response, next: NextFunction) {
	const sessionId = req.cookies.uid;

	const userData = getUser(sessionId);

	req.body.user = userData;

	next();
}

export { userVerification, userCheck };
