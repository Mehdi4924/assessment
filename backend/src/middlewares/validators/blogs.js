import Joi from "joi";

const schema = Joi.object({
  title: Joi.string().required().messages({
    "string.empty": "Please Add Title Of The Blog",
    "any.required": "Please Add Title Of The Blog",
  }),
  subTitle: Joi.string().required().messages({
    "string.empty": "Please Add Sub Title Of The Blog",
    "any.required": "Please Add Sub Title Of The Blog",
  }),
  content: Joi.string().required().messages({
    "string.empty": "Please Add Some Content To The Blog",
    "any.required": "Please Add Some Content To The Blog",
  }),
  tags: Joi.array().items(Joi.string()).optional().default([]),
  author: Joi.string().required().messages({
    "string.empty": "Author ID is required",
    "any.required": "Author ID is required",
  }),
});

const validate = async (req, res, next) => {
  try {
    const { error } = schema.validate(req.body);
    if (error) {
      if (error.details && error.details.length && error.details[0].message) {
        return res.status(400).json({ msg: error.details[0].message });
      }
      return res.status(400).json({ msg: error.message });
    }
    return next();
  } catch (error) {
    if (error.details && error.details.length && error.details[0].message) {
      return res.status(400).json({ msg: error.details[0].message });
    }
    return res.status(400).json({ msg: error.message });
  }
};

export default validate;
