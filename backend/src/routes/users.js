import express from "express";
const { Router } = express;
import userController from "../controllers/users.js";
import validators from "../middlewares/validators/index.js";
import { handleFileUpload } from "../middlewares/fileHandler.js";

const router = Router();

router.post(
  "/",
  handleFileUpload,
  validators.userValidator,
  userController.createUser
);

export default router;
