//handle files
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(path.resolve(), "uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});
export const upload = multer({ storage });

export const handleFileUpload = (req, res, next) => {
  upload.any()(req, res, (err) => {
    if (err) {
      return res
        .status(400)
        .json({ message: "File upload error", error: err.message });
    }
    next();
  });
};
