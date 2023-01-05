const gitUserController = require("../controllers/gitUser");
const express = require("express");
const router = express.Router();

router.get("", gitUserController.getUser);

module.exports = router;
