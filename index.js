import axios from "axios";
import fs from "fs";
import express from "express";
import { Router } from "express";
import { bootstrap } from "./controllers/app.controller.js";
const app = express();

bootstrap(app, express);

const port = 3000;

app.listen(port, () => {
  console.log("server is running on port", port);
});
