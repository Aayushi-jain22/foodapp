const express = require("express");
const router = express.Router();
const User = require("../models/User");

const { body, validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const jwtSecret = "MynameisAayushijainSamyakjainpaddftni$#";
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "incorrect password").isLength({ min: 5 }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);
    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      }).then;
      res.json({ sucess: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false });
    }
  }
);

router.post("/loginuser", async (req, res) => {
  console.log("Login request received:", req.body);
  const { email, password } = req.body;

  try {
    let userData = await User.findOne({ email });
    console.log("User data retrieved from database:", userData);

    if (!userData) {
      console.log("User not found for email:", email);
      return res
        .status(400)
        .json({ error: "Try login with correct credentials" });
    }
    console.log(password);

    const pwdCompare = await bcrypt.compare(password, userData.password);
    console.log(userData.password);

    console.log("Password comparison result:", pwdCompare);

    if (!pwdCompare) {
      console.log("Incorrect password for email:", email);
      return res
        .status(400)
        .json({ error: "Try login with correct credentials" });
    }

    const data = { user: { id: userData.id } };
    const authToken = jwt.sign(data, jwtSecret);

    console.log("Generated authToken:", authToken);
    res.json({ success: true, authToken: authToken });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false });
  }
});

module.exports = router;
