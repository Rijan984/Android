const express = require("express");
const { mongo } = require("mongoose");
const router = express.Router();

const { register,job, getjob,login, getMe, logout } = require("../controllers/auth");

const { protect } = require("../middleware/auth");

router.post("/register", register);
router.post("/job", job);
router.post("/login", login);




router.get("/me", getMe);
// router.post("/forgotpassword", forgotPassword);
// router.put("/resetpassword/:resettoken", resetPassword);
router.get("/logout", logout);

module.exports = router;
