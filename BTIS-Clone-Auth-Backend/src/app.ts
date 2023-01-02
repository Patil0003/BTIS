import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { mongoconnection } from "./database";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger/swagger.json";
import Userroot from "./route/user";

const app = express();
mongoconnection();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(Object({ extended: true })));

app.use("/auth", Userroot);
app.use("/swagger-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT;
app.listen(port, (): void => {
  console.log(`Runing on port :- ${port}`);
});
export default app;
