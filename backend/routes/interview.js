const express = require("express");
const router = express.Router();

const _ = require("lodash");
const { Interview, validate } = require("../models/interview");

const admin = require("../middleware/admin");
const auth = require("../middleware/auth");

// return all interview questions
router.get("/", async (req, res) => {
  const interviews = await Interview.find().sort("title");
  res.send(interviews);
});

// post a new interview question
router.post("/", async (req, res) => {
  // validate input
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let interview = new Interview({
    question: req.body.question,
    answer: req.body.answer,
  });
  interview = await interview.save();
  res.send(interview);
});

// edit interview question
router.put("/:id", async (req, res) => {
  // validate input
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // update project information
  let interview = await Interview.findByIdAndUpdate(
    req.params.id,
    {
      question: req.body.question,
      answer: req.body.answer,
    },
    { new: true }
  );
  if (!interview)
    return res
      .status(404)
      .send("There are no interview questions with the given id");

  res.send(interview);
});

// get specific interview question
router.get("/:id", async (req, res) => {
  const interview = await Interview.findById(req.params.id);
  if (!interview)
    return res
      .status(404)
      .send("There are no interview question with the given ID");
  res.send(interview);
});

// delete a interview question by id
router.delete("/:id", async (req, res) => {
  const interview = await Interview.findByIdAndDelete(req.params.id);
  if (!interview)
    return res
      .status(404)
      .send("There are no interview question with the given id");

  res.send(interview);
});
module.exports = router;
