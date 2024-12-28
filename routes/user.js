const express = require("express");
const router = express.Router();
const {loginPage, dashboard, loginProcess} = require(". ./controllers/userControllers");


router.get("/", loginPage);
router.get("/dashboard", dashboard);
router.post("/login", loginProcess);

module.exports = router;