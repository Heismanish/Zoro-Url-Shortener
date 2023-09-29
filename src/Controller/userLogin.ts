import { Request, Response } from "express";
import user from "../Models/user";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { setUser } from "../service/auth";

async function userLogin(req: Request, res: Response) {
	const { email, password } = req.body;

	try {
		const userInDB = await user.findOne({ email });
		if (!userInDB) {
			return res
				.status(404)
				.render("login", { message: "User not found in db" });
		}
		const isPasswordValid = await bcrypt.compare(password, userInDB.password);

		console.log("Login route working");

		if (!isPasswordValid) {
			return res.status(401).render("login", { message: "Invalid Password" });
		}

		// CREATING SESSION ID:
		const sessionId = uuidv4();
		setUser(sessionId, userInDB);
		res.cookie("uid", sessionId);

		return res.redirect("/");
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error occured while sign-in" });
	}
}

export default userLogin;
