import express from "express";
const { Router } = express;
const router = Router();
import blogController from "../controllers/blogs.js";

router.post("/", blogController.createBlogs);
router.get("/", blogController.getBlogs);
router.put("/:id", blogController.updateBlog);
router.get("/tags", blogController.getBlogTags);
export default router;
