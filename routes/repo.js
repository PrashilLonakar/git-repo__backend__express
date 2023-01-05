const repoController = require("../controllers/repo");
const express = require("express");
const router = express.Router();

router.get("/list", repoController.getRepo);

router.get("/detail", repoController.getRepoByName);

module.exports = router;
