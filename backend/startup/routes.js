const express = require("express");

const user = require("../routes/user");
const auth = require("../routes/auth");
const project = require("../routes/project");
const course = require("../routes/course");
const tutorial = require("../routes/tutorial");
const qna = require("../routes/question");
const interview = require("../routes/interview");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/users", user);
  app.use("/api/auth", auth);
  app.use("/api/project", project);
  app.use("/api/course", course);
  app.use("/api/tutorial", tutorial);
  app.use("/api/qna", qna);
  app.use("/api/interview", interview);
};
