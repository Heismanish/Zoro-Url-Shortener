import express, { Router } from "express";
import user from "../Models/user";
import userSignUp from "../Controller/UserSignup";
import userLogin from "../Controller/userLogin";

const router = Router();

router.post("/", userSignUp);
router.post("/login", userLogin);

export default router;
