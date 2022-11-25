const express = require("express");
const router = express.Router();

const _ = require("lodash");
const { Project, validate } = require("../models/project");

const admin = require("../middleware/admin");
const auth = require("../middleware/auth");

// return all projects
router.get("/", async (req, res) => {
  const projects = await Project.find().sort("title");
  res.send(projects);
});

// post a new project
router.post("/", async (req, res) => {
  // validate input
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let project = new Project({
    title: req.body.title,
    contents: req.body.contents,
    difficulty: req.body.difficulty,
  });
  project = await project.save();
  res.send(project);
});

// edit project
router.put("/:id", async (req, res) => {
  // validate input
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);


  // update project information
  let project = await Project.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      difficulty: req.body.difficulty,
    },
    { new: true }
  );
  if (!project) return res.status(404).send("There are no project with the given id");

  //  update project's detail
  if (req.body.content) {
    project.contents.push(req.body.content)
  }
  await project.save();

  res.send(project);
});

// get specific project
router.get('/:id', async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) return res.status(404).send('There are no projects with the given ID');
  res.send(project);
})

// delete project by id
// delete project
router.delete("/:id", async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) return res.status(404).send("There are no project with the given id");

  res.send(project);
})
module.exports = router;
