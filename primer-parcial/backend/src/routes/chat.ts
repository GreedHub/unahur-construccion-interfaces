import { Router } from "express";
import {
  createSession,
  answerPrompt,
  getAllSessions,
} from "../controller/chat";
import PromiseHelper from "../utils/promise";

const dialogflowRouter = Router();

dialogflowRouter
  .route("/chat/session/")
  .post(async (req, res) => {
    const { lang, model } = req.body;

    const sessionId = createSession(model, lang);

    res.status(201).json({ data: { sessionId } });
  })
  .get(async (req, res) => {
    const sessions = getAllSessions();

    res.status(200).json({ data: { sessions } });
  })
  .get();

dialogflowRouter.route("/chat/:sessionId/prompt").post(async (req, res) => {
  const { prompt } = req.body;
  const { sessionId } = req.params;

  const [response, err] = await PromiseHelper(answerPrompt(sessionId, prompt));

  if (err) return res.status(500).send(err);

  res.status(200).json({ data: { response } });
});

export default dialogflowRouter;
