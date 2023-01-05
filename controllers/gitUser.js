const Repo = require("../models/repo");
const https = require("https");

exports.getUser = (req, res, next) => {
  const username = req.query.username;
  console.log("username", username);
  const options = {
    hostname: "api.github.com",
    path: "/users/" + username,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36",
    },
  };
  https
    .get(options, function (apiResponse) {
      apiResponse.pipe(res);
    })
    .on("error", (e) => {
      console.log(e);
      res.status(500).send("Something went wrong!");
    });
};
