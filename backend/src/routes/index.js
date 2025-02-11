import express from "express";
import userRouter from "./users.js";
import blogsRouter from "./blogs.js";
const { Router } = express;
const router = Router();

router.use("/user", userRouter);
router.use("/blogs", blogsRouter);
export default router;
