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

// static
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://chrome-insight.herokuapp.com/"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// PROJECTS
app.use("/api/projects", projects);

// ASSIGNMENTS
app.use("/api/assignments", assignments);
// PEOPLE
app.use("/api/people", people);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`listening on port ${port}`));
