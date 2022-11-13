const { restart } = require("nodemon");
const express = require("express");

const app = express();

// startup
// config
require('./startup/config')();
// db
require('./startup/db')();
// routes
require('./startup/routes')(app);


app.get("/", (req, res) => {
  res.send({ message: "Welcome to SQL4U API" });
});

const port = process.env.PORT || 3900;
app.listen(port, () => console.log(`Listening on port ${port}`));
