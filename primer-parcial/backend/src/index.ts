import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import routes from "./routes";
import cors from "cors";
import { readFile } from "fs";
require('dotenv').config()

readFile("./credentials/gcp.json", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log({ json: process.env.GCP_AUTH_JSON });

const corsEnabledDomains = process.env.CORS_ENABLED_ORIGINS?.split(",") ?? [
  "http://127.0.0.1:5173",
  "http://localhost:5173",
];

console.log({ corsEnabledDomains });

const PORT = 5000;

const app = express();

app.use(bodyParser.json());
app.use(helmet());

app.use(
  cors({
    origin: corsEnabledDomains,
    credentials: true,
  })
);

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}/`);
});
