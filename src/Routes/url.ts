import express from "express";
import generateShortURL from "../Controller/url";
import handleAnalytics from "../Controller/handleAnalytics";
const router = express.Router();

router.post("/", generateShortURL);

router.get("/analytics/:shortId", handleAnalytics);
export default router;
