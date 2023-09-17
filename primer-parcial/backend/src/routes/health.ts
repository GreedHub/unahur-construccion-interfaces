import { Router } from "express";

const healthRouter = Router();

healthRouter.route("/health").get((req, res) => {
  res.send("ok");
});

export default healthRouter;
