import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import UserRoot from "./route/user-gateway";
import SubRoot from "./route/sub-gateway";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger/swagger.json";


const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(Object({ extended: true })));
app.use("/sub-gateway", SubRoot);
app.use("/user-gateway", UserRoot);
app.use("/uploads", express.static("uploads"));
app.use("/swagger-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const port = process.env.PORT;
app.listen(port, (): void => {
  console.log(`Runing on port :- ${port}`);
});
export default app;
