const Repo = require("../models/repo");
const https = require("https");

//const fetch = require("node-fetch");

exports.getCommitsByRepoName = (req, res, next) => {
  const username = req.query.username;
  const reponame = req.query.reponame;
  if (!username && !reponame) {
    return res.status(500).json({
      message: "username and reponame is missing!",
    });
  } else if (username && !reponame) {
    return res.status(500).json({
      message: "reponame is missing!",
    });
  } else if (!username && reponame) {
    return res.status(500).json({
      message: "username is missing!",
    });
  }
  const options = {
    hostname: "api.github.com",
    path: "/repos/" + username + "/" + reponame + "/" + "commits",
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

function requestUserRepos(username) {
  // create a variable to hold the `Promise` returned from `fetch`
  return repoData;
  // Promise.resolve(
  //   fetch(`https://api.github.com/users/${username}/repos`)
  // );
}
