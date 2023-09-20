import { Router } from "express";
import { getAccessToken } from "../controller/gcp-auth";
import PromiseHelper from "../utils/promise";

const gcpAuthRouter = Router();

gcpAuthRouter.route("/token/gcp").get(async (req, res) => {
    const [response, err] = await PromiseHelper( getAccessToken())

    if(err) return res.status(500).json(err)

    res.json(response)
});

export default gcpAuthRouter;
