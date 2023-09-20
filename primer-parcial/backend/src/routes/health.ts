import { Router } from "express";

const healthRouter = Router();

healthRouter.route("/health").get((_, res) => {
  res.send("ok");
});

export default healthRouter;
