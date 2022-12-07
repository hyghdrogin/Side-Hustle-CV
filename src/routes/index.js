import { Router } from "express";
import uploadRoutes from "./reviewUpload";
// import priceRoutes from "./prices";

const router = Router();

router.use("/upload", uploadRoutes);
// router.use("/prices", priceRoutes);

export default router;
