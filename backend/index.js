import express from "express";
const app = express();
import cors from "cors";
import morgan from "morgan";

import { dbConnect } from "./Src/classes/db.js";
import helmet from "helmet";
import ExpressMongoSanitize from "express-mongo-sanitize";
import { config } from "dotenv";
import compression from "compression";
import { createServer } from "http";
import bodyParser from "body-parser";
import Router from "./src/routes/index.js";
import path from 'path';
config();

const db = dbConnect();
app.db = db;
const serverEnv = process.env.NODE_ENV || "dev";
const PORT = process.env.PORT || 3001;
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);
const __dirname = path.resolve();

const server = createServer(app);
//Sanitize the requests
app.use(ExpressMongoSanitize());
app.use(compression());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json());
// Allow CORS
app.use(cors());
app.use(morgan("dev"));
app.use('/uploads', express.static(__dirname + "/uploads"))

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/api/health", (req, res) =>
  res.status(200).json({ msg: "API Working!!", version: "1.0.0 (0.0.1)" })
);
app.use("/api", Router);

//  Start the server
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
