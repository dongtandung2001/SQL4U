const express = require("express");
const router = express.Router();

const _ = require("lodash");
const { Course, validate } = require("../models/course");

// return all courses
router.get("/", async (req, res) => {
  const courses = await Course.find().sort("title");
  res.send(courses);
});

// post a new course
router.post("/", async (req, res) => {
  // validate input
  const { error } = validate(req.body);
  if (error) res.status(400).send(error.details[0].message);

  let course = new Course({
    topic: req.body.topic,
    name: req.body.name,
    length: req.body.length,
    teacher: req.body.teacher,
    cover: req.body.cover,
  });
  course = await course.save();
  res.send(course);
});

// edit project
router.put("/:id", async (req, res) => {
  // validate input
  const { error } = validate(req.body);
  if (error) res.status(400).send(error.details[0].message);

  let course = await Course.findByIdAndUpdate(
    req.params.id,
    {
      topic: req.body.topic,
      name: req.body.name,
      length: req.body.length,
      teacher: req.body.teacher,
      cover: req.body.cover,
    },
    { new: true }
  );

  if (!course) res.status(404).send("There are no course with the given id");
  res.send(course);
});

module.exports = router;
