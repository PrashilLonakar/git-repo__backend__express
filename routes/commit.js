const commitController = require("../controllers/commit");
const express = require("express");
const router = express.Router();

router.get("", commitController.getCommitsByRepoName);

module.exports = router;
