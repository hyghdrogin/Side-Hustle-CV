import { Router } from "express";
import ReviewController from "../controllers/review";
import validator from "../middlewares/validator";
import parser from "../middlewares/upload";

import { validateReview } from "../validations/review";

const router = Router();
const { createReview } = ReviewController;

router.post("/", validator(validateReview), parser.single("pdf"), createReview);

export default router;
