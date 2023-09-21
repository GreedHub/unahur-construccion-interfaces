import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import routes from "./routes";
import cors from "cors";

const gcp = require("./credentials/gcp.json");
console.log({ gcp });

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
