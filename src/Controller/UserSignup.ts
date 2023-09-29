import { Request, Response } from "express";
import user from "../Models/user";
import bcrypt from "bcrypt";

const userSignUp = async (req: Request, res: Response) => {
	const { name, email, password } = req.body;
	const hashPass = await bcrypt.hash(password, 10);

	await user.create({
		name,
		email,
		password: hashPass,
	});

	// console.log(name, email, hashPass);
	return res.redirect("/");
};

export default userSignUp;
