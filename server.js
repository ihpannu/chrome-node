const express = require("express");
// const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const Forecast = require("forecast-api");
const projects = require("./Api/projects");
const assignments = require("./Api/assignments");
const people = require("./Api/people");
app.use(express.static(path.join(__dirname, "build")));

//Home Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// TEST API
app.get("/api", (req, res) => {
  return res.send("Pong");
});

// PROJECTS
app.use("/api/projects", projects);

// ASSIGNMENTS
app.use("/api/assignments", assignments);
// PEOPLE
app.use("/api/people", people);
const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`listening on port ${port}`));
