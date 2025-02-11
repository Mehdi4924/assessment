import { config } from "dotenv";
import models from "../models/index.js";
config();
const { Users } = models;
export default {
  createUser: async (req, res) => {
    try {
      const {
        body: { firstName, lastName, bio },
      } = req;
      await Users.create({
        firstName,
        lastName: lastName,
        bio: bio,
        profilePicUrl:
          !!req.files && req.files[0].filename ? req.files[0].filename : "",
      });
      return res.status(200).json({ messsage: "User Created" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ messsage: error?.messsage || "Internal Server Error" });
    }
  },
};
