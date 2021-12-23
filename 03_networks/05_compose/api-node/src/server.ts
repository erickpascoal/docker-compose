import express, { Request, Response } from "express";
require("dotenv").config();
import "./database";
import "reflect-metadata";
import { enviroments } from "./constants/enviroments";

const app = express();
const PORT = 3333;

app.get("/", (request: Request, response: Response) => {
  response.status(200).send("Hello World - o pai é muito bom!!!");
});

app.listen(PORT, () => {
  console.log(`listen on ${PORT}, env: ${enviroments.NODE_ENV} 🐺`);
});
