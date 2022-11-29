const Joi = require("joi");
const mongoose = require("mongoose");
const config = require("config");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  skill: {
    type: String,
  },
  finishedProject: [
    new mongoose.Schema({
      title: {
        type: String,
        required: true,
      },
    }),
  ],
  savedQuestion: [
    new mongoose.Schema({
      question: {
        type: String,
        required: true,
      },
    }),
  ],
});

userSchema.methods.generateJwtToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      admin: this.admin,
      email: this.email,
    },
    config.get("jwtPrivateKey")
  );
  return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
    skill: Joi.string(),
  });
  return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;
