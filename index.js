import express, { Router } from "express";
import cors from "cors";

import { MongoDbConnection } from "./src/database/mongo/connection/connect.js";
import { makeUserFactory } from "./src/factories/user.js";
import { makeCharacterFactory } from "./src/factories/character.js";
import { makeAuthFactory } from "./src/factories/auth.js";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./src/docs/swagger.js";

const ConnectDb = new MongoDbConnection();
await ConnectDb.ConnectDb();

const app = express();
const router = Router();

const user = makeUserFactory(router);
const character = makeCharacterFactory(router);
const auth = makeAuthFactory(router);

app.use(express.json());
app.use(cors());
app.use("/characters", character.route());
app.use("/users", user.route());
app.use("/auth", auth.route());

app.use("/docs", swaggerUi.serve);
app.get("/docs", swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3190;
app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
