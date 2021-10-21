const express = require("express");
const Icecream = require("../models/Icecream");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("We are on icecreams");
});

module.exports = router;
