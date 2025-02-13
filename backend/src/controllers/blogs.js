import { config } from "dotenv";
import models from "../models/index.js";
config();
const { Users, Blogs } = models;
export default {
  createBlogs: async (req, res) => {
    try {
      const {
        body: { author },
      } = req;
      const validAuthor = await Users.findById(author);
      if (!validAuthor) {
        throw new Error("User Id Invalid");
      }

      await Blogs.create(req.body);
      return res.status(200).json({ messsage: "Blog Created" });
    } catch (error) {
      return res
        .status(500)
        .json({ messsage: error?.message || "Internal Server Error" });
    }
  },
  getBlogs: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      if (req.query.tags) {
        const tags = req.query.tags.split(",");
        const tagRegexArray = tags.map((tag) => new RegExp(`^${tag}$`, "i"));
        const findedBlogs = await Blogs.find({
          tags: { $in: tagRegexArray },
        }).populate("author");
        return res.status(200).json({ blogs: [...findedBlogs] });
      } else if (req.query.search) {
        const search = req.query.search;
        const blogs = await Blogs.find({
          $or: [
            { title: { $regex: search, $options: "i" } },
            { subTitle: { $regex: search, $options: "i" } },
          ],
        }).populate("author");
        return res.status(200).json({ blogs: [...blogs] });
      }
      const skip = (page - 1) * limit;
      const findedBlogs = await Blogs.find()
        .skip(skip)
        .limit(limit)
        .populate("author");
      return res.status(200).json({ blogs: [...findedBlogs] });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ messsage: error?.message || "Internal Server Error" });
    }
  },
  updateBlog: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedBlog = await Blogs.findByIdAndUpdate(id, req.body, {
        new: true,
      }).populate("author");
      res.status(200).json(updatedBlog);
    } catch (error) {
      res.status(500).json({ message: "Error updating blog", error });
    }
  },
  getBlogTags: async (req, res) => {
    try {
      const uniqueTags = await Blogs.aggregate([
        { $unwind: "$tags" },
        { $group: { _id: "$tags" } },
        { $project: { _id: 0, tag: "$_id" } },
      ]);
      const tags = uniqueTags.map((item) => item.tag);
      res.status(200).json({ tags: [...tags] });
    } catch (error) {
      res.status(500).json({ message: "Error updating blog", error });
    }
  },
};
