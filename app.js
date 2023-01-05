const express = require("express");
const repoRoutes = require("./routes/repo");
const gitUserRoutes = require("./routes/gitUser");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// app.use((req, res, next) => {
//   console.log("First Middleware");
//   res.send("Hello from express");
//   next();
// });

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("First Middleware");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/repo", repoRoutes);
app.use("/api/git-user", gitUserRoutes);

module.exports = app;
