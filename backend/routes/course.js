const express = require("express");
const router = express.Router();

const _ = require("lodash");
const { Course, validate } = require("../models/course");
const { Project } = require("../models/project");
const { Tutorial } = require("../models/tutorial");

const admin = require("../middleware/admin");
const auth = require("../middleware/auth");

// return all courses
router.get("/", async (req, res) => {
  const courses = await Course.find().sort("title");
  res.send(courses);
});

// post a new course
router.post("/", async (req, res) => {
  // validate input
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

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

// edit course information
router.put("/:id", async (req, res) => {
  // validate input
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

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

  if (!course)
    return res.status(404).send("There are no course with the given id");
  res.send(course);
});

// add project to course
router.put("/project/:id", async (req, res) => {
  let course = await Course.findById(req.params.id);
  if (!course)
    return res.status(404).send("There are no courses with the given id");

  let project = await Project.findById(req.body.id);

  if (!project)
    return res.status(404).send("There are no projects with the given id");

  course.projects.push({
    _id: project._id,
    title: project.title,
  });
  await course.save();

  res.send(course);
});

// delete course's project by id
router.put("/deleteProject/:id", async (req, res) => {
  let course = await Course.findById(req.params.id);
  if (!course)
    return res.status(404).send("There are no courses with the given id");

  let project = await Project.findById(req.body.id);

  if (!project)
    return res.status(404).send("There are no projects with the given id");

  let index = course.projects.findIndex(
    (projects) => projects._id.toString() === project._id.toString()
  );
  if (index === -1)
    return res
      .status(404)
      .send("There are no project with the given ID in this course");
  course.projects.splice(index, 1);
  await course.save();

  res.send(course);
});

// add tutorial to course
router.put("/tutorial/:id", async (req, res) => {
  let course = await Course.findById(req.params.id);
  if (!course)
    return res.status(404).send("There are no courses with the given id");

  let tutorial = await Tutorial.findById(req.body.id);
  if (!tutorial)
    return res.status(404).send("There are no tutorials with the given id");

  course.tutorials.push({
    _id: tutorial._id,
    title: tutorial.title,
  });
  await course.save();

  res.send(course);
});

// delete course's tutorial by id
router.put("/deleteTutorial/:id", async (req, res) => {
  let course = await Course.findById(req.params.id);
  if (!course)
    return res.status(404).send("There are no courses with the given id");

  let tutorial = await Tutorial.findById(req.body.id);

  if (!tutorial)
    return res.status(404).send("There are no tutorial with the given id");
  console.log(tutorial);
  let index = course.tutorials.findIndex(tutorials => tutorials._id.toString() === tutorial._id.toString())
  console.log(index);
  if (index === -1)
    return res
      .status(404)
      .send("There are no tutorial with the given ID in this course");
  course.tutorials.splice(index, 1);
  await course.save();

  res.send(course);
});

router.delete("/:id", async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.id);
  if (!course)
    return res.status(404).send("Does not exist course with the given ID");
  res.send(course);
});

// get specific course
router.get("/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course)
    return res.status(404).send("There are no course with the given ID");
  res.send(course);
});

module.exports = router;
