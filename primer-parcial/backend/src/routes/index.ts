import { Router } from "express";
import healthRouter from "./health";
import chatRouter from "./chat";

const router = Router();

router.use(healthRouter);
router.use(chatRouter);

export default router;
