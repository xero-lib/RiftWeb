const express = require("express");
const router = express.Router();

router.route("/").post((req, res, next) => {
  var username = localStorage.setItem("user", req.body.username);
});

module.exports = router;
