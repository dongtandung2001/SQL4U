const { restart } = require("nodemon");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Welcome to SQL4U API" });
});

const port = process.env.PORT || 3900;
app.listen(port, () => console.log(`Listening on port ${port}`));
