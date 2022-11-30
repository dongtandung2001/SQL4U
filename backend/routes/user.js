const bcrypt = require("bcrypt");
const { User, validate } = require("../models/user");
const _ = require("lodash");

const express = require("express");
const { Course } = require("../models/course");
const { Project } = require("../models/project");
const { Interview } = require("../models/interview");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", async (req, res) => {
  // validate input
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if account is existed
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("Email already existed");

  // Create user
  user = new User(_.pick(req.body, ["email", "password", "skill"]));

  // encrypt passwor
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  // send jwt token to response header
  const token = user.generateJwtToken();
  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(_.pick(user, ["_id", "email"]));
});

// add finished project to finishedProject
router.post("/project/:id", async (req, res) => {
  let user = await User.findById(req.params.id);
  if (!user)
    return res.status(404).send("There are no users with the given ID");

  // check if course exists
  let project = await Project.findById(req.body.id);
  if (!project)
    return res.status(404).send("There are no projects with the given ID");

  // check if this project is already finished
  const existed = user.finishedProject.find(
    (userProject) => userProject._id.toString() === project._id.toString()
  );
  if (existed)
    return res.status(403).send("User already finished this project");

  // add project to user's profile
  user.finishedProject.push({
    _id: project._id,
    title: project.title,
  });
  await user.save();
  res.send(user);
});

// delete finishedProject
router.put("/project/:id", async (req, res) => {
  let user = await User.findById(req.params.id);
  if (!user)
    return res.status(404).send("There are no users with the given ID");

  // check if course exists
  let project = await Project.findById(req.body.id);
  if (!project)
    return res.status(404).send("There are no projects with the given ID");

  // check if this project is already finished
  const index = user.finishedProject.findIndex(
    (userProject) => userProject._id.toString() === project._id.toString()
  );
  if (index === -1)
    return res.status(403).send("User has not finished this project");

  // delete project to user's profile
  user.finishedProject.splice(index, 1);
  await user.save();
  res.send(user);
});

// add interview question to user
router.post("/interview/:id", async (req, res) => {
  let user = await User.findById(req.params.id);
  if (!user)
    return res.status(404).send("There are no users with the given ID");
  let question = await Interview.findById(req.body.id);
  if (!question)
    return res.status(404).send("There are no question with the given ID");

  // find if question already saved
  const existed = user.savedQuestion.find(
    (q) => q._id.toString() === question._id.toString()
  );
  if (existed) return res.status(403).send("Already saved this question");
  // add to user's profile
  user.savedQuestion.push({
    _id: question._id,
    question: question.question,
  });
  // save
  await user.save();
  res.send(user);
});

// unsave interview question
router.put("/interview/:id", async (req, res) => {
  let user = await User.findById(req.params.id);
  if (!user)
    return res.status(404).send("There are no users with the given ID");
  let question = await Interview.findById(req.body.id);
  if (!question)
    return res.status(404).send("There are no question with the given ID");

  // find if question already saved
  const index = user.savedQuestion.findIndex(
    (q) => q._id.toString() === question._id.toString()
  );
  if (index === -1)
    return res.status(403).send("Has not saved this question yet");
  // add to user's profile
  user.savedQuestion.splice(index, 1);
  // save
  await user.save();
  res.send(user);
});

// update password
router.put("/:id", async (req, res) => {
  // const { error } = validate(req.body);
  let user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send("User with the given ID does not exist");
  }
  // encrypt passwor
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  res.send(_.pick(user, ["_id", "email"]));
});

// get current user
router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

module.exports = router;
