import Joi from "joi";

const schema = Joi.object({
  firstName: Joi.string().required().messages({
    "string.empty": "Please Add First Name",
    "any.required": "Please Add First Name",
  }),
  lastName: Joi.string().required().messages({
    "string.empty": "Please Add Last Name",
    "any.required": "Please Add Last Name",
  }),
  bio: Joi.string().allow("").optional(), // Optional, can be an empty string
  profilePicUrl: Joi.string().allow("").optional(), // Optional, can be an empty string
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
