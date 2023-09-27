import express from "express";
import originalIdRedirector from "../Controller/shortUrl";

const router = express.Router();

router.get("/:id", originalIdRedirector);

export default router;
