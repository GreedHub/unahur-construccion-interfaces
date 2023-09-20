import { Router } from "express";
import healthRouter from "./health";
import gcpAuthRouter from "./gcp-auth";
import dialogflowRouter from "./dialogflow";


const router = Router();

router.use(healthRouter);
router.use(gcpAuthRouter);
router.use(dialogflowRouter);


export default router;
