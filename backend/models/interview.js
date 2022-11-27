const mongoose = require("mongoose");
const Joi = require("joi");

const interviewSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  }
});

const Interview = mongoose.model("Interview", interviewSchema);

function validateInterview(interview) {
  const schema = Joi.object({
    question: Joi.string().required(),
    answer: Joi.string().required(),
    topic: Joi.string().required(),
  });
  return schema.validate(interview);
}

exports.Interview = Interview;
exports.validate = validateInterview;
