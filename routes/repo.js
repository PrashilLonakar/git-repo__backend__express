const repoController = require("../controllers/repo");
const express = require("express");
const router = express.Router();

router.get("", repoController.getRepo);

module.exports = router;
