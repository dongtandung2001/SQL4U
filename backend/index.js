const express = require("express");
const cors = require("cors");
const app = express();

// startup
// cors
app.use(cors());
require("./startup/cors")(app);
// config
require("./startup/config")();
// db
require("./startup/db")();
// routes
require("./startup/routes")(app);
// production
require("./startup/production")(app);

app.get("/", (req, res) => {
  res.send({ message: "Welcome to SQL4U API" });
});

const port = process.env.PORT || 3900;
app.listen(port, () => console.log(`Listening on port ${port}`));
