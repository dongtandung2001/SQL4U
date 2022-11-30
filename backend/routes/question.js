const express = require("express");
const router = express.Router();

const _ = require("lodash");
const { QnA, validate } = require("../models/question");

const admin = require("../middleware/admin");
const auth = require("../middleware/auth");

// return all questions
router.get("/", async (req, res) => {
  const questions = await QnA.find().sort("title");
  res.send(questions);
});

// post a new question
router.post("/", async (req, res) => {
  // validate input
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let question = new QnA({
    userName: req.body.userName,
    title: req.body.title,
    description: req.body.description,
    topic: req.body.topic,
  });
  question = await question.save();
  res.send(question);
});

// edit question
router.put("/:id", async (req, res) => {
  // validate input
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // update question information
  let question = await QnA.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
    },
    { new: true }
  );
  if (!question)
    return res.status(404).send("There are no questions with the given id");

  //  update question's detail
  if (req.body.reply) {
    question.replies.push(req.body.reply);
  }
  await question.save();

  res.send(question);
});

// delete reply
router.put("/reply/:id", async (req, res) => {
  let question = await QnA.findById(req.params.id);
  if (!question)
    return res.status(404).send("There are no question with the given id");
  const replyIndex = question.replies.findIndex(
    (reply) => reply._id.toString() === req.body.id.toString()
  );
  if (replyIndex === -1)
    return res.status(404).send("There are no replies with the given ID");
  question.replies.splice(replyIndex, 1);
  await question.save();
  res.send(question);
});

// get question project
router.get("/:id", async (req, res) => {
  const question = await QnA.findById(req.params.id);
  if (!question)
    return res.status(404).send("There are no questions with the given ID");
  res.send(question);
});

// delete question, only admin can use this api
router.delete("/:id", [auth, admin], async (req, res) => {
  const question = await QnA.findByIdAndDelete(req.params.id);
  if (!question)
    return res.status(404).send("There are no questions with the given id");
  res.send(question);
});
module.exports = router;
