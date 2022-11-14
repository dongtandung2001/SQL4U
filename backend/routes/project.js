const express = require("express");
const router = express.Router();

const _ = require("lodash");
const { Project, validate } = require("../models/project");

// return all projects
router.get("/", async (req, res) => {
  const projects = await Project.find().sort("title");
  res.send(projects);
});

// post a new project
router.post("/", async (req, res) => {
  // validate input
  const { error } = validate(req.body);
  if (error) res.status(400).send(error.details[0].message);

  let project = new Project({
    title: req.body.title,
    content: req.body.content,
    difficulty: req.body.difficulty,
  });
  project = await project.save();
  res.send(project);
});

// edit project
router.put("/:id", async (req, res) => {
  // validate input
  const { error } = validate(req.body);
  if (error) res.status(400).send(error.details[0].message);

  let project = await Project.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      content: req.body.content,
      difficulty: req.body.difficulty,
    },
    { new: true }
  );

  if (!project) res.status(404).send("There are no project with the given id");
  res.send(project);
});

module.exports = router;
