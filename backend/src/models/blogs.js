import mongoose, { Schema } from "mongoose";
import slugify from "slugify";
const blogsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please Add Title Of The Blog"],
    },
    subTitle: {
      type: String,
      required: [true, "Please Add Sub Title Of The Blog"],
    },
    content: {
      type: String,
      required: [true, "Please Add Some Content To The Blog"],
    },
    slug: {
      type: String,
      required: [true, "Slug Not Added To Blog Or Is Not Unique"],
      unique: true,
    },
    tags: { type: [String], default: [] },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);

blogsSchema.pre("save", async function (next) {
  if (!this.isModified("title")) {
    return next();
  }
  const baseSlug = slugify(this.title, { lower: true, strict: true });

  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const existingBlog = await mongoose.model("blogs").findOne({ slug });
    if (!existingBlog) {
      break;
    }
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  this.slug = slug;
  next();
});
export const blogs = mongoose.model("blogs", blogsSchema);
