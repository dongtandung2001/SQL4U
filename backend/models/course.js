const mongoose = require("mongoose");

const Joi = require("joi");

const courseSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
    maxlength: 255,
  },
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  length: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  teacher: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
  },
  projects: [
    new mongoose.Schema({
      title: {
        type: String,
        required: true,
      },
    }),
  ],
  tutorials: [
    new mongoose.Schema({
      title: {
        type: String,
        required: true,
      },
    }),
  ],
});

const Course = mongoose.model("Course", courseSchema);

function validateCourse(course) {
  const schema = Joi.object({
    topic: Joi.string().required().max(255),
    name: Joi.string().required().min(5).max(255),
    length: Joi.string().required().min(5).max(255),
    teacher: Joi.string().required().min(5).max(255),
    cover: Joi.string(),
  });
  return schema.validate(course);
}

exports.Course = Course;
exports.validate = validateCourse;
