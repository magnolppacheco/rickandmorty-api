import express, { Router } from "express";
import cors from "cors";

import { MongoDbConnection } from "./src/database/mongo/connection/connect.js";
import { makeUserFactory } from "./src/factories/user.js";
import { makeCharacterFactory } from "./src/factories/character.js";

const ConnectDb = new MongoDbConnection();
await ConnectDb.ConnectDb();

const app = express();
const router = Router();

const user = makeUserFactory(router);
const character = makeCharacterFactory(router);

app.use(express.json());
app.use(cors());
app.use("/characters", character.route());
app.use("/users", user.route());

app.listen(3190, () => {
  console.log("Server listening on: http://localhost:3190");
});
