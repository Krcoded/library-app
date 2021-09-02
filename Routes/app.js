const express = require("express");
const router = express.Router();

router.post("/app", function (req, rs) {
  res.send({ type: "POST" });
});
