import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import routes from "./routes";

const PORT = 5000;

const app = express();

app.use(bodyParser.json());
app.use(helmet());

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}/`);
});
