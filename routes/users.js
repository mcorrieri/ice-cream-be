const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  res.send("We are on users");
});

router.post("/", (req, res) => {
  res.send("create a user");
});

module.exports = router;
