const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Signup Route
router.post("/signup", async (req, res) => {
	console.log("Signup route hit");
	const { username, email, password } = req.body;

	try {
		let user = await User.findOne({ email });
		if (user) {
			return res.status(400).json({ msg: "User already exists" });
		}
		user = new User({
			username,
			email,
			password: await bcrypt.hash(password, 10),
		});

		await user.save();
		res.status(201).json({ msg: "User registered successfully" });
	} catch (err) {
		res.status(500).json({ msg: "Server error" });
	}
});

// Login Route
router.post("/login", async (req, res) => {
	console.log("login route hit");
	const { email, password } = req.body;
	// console.log(email, password);
	try {
		const user = await User.findOne({ email });
		console.log(user, "user");
		if (!user) {
			return res.status(400).json({ msg: "Invalid credentials" });
		}
		const isMatch = await bcrypt.compare(password, user.password);

		// console.log(isMatch, "match");
		if (!isMatch) {
			return res.status(400).json({ msg: "Invalid credentials" });
		}
		const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
		// console.log(token, "token");
		res.json({ token, user: { id: user._id, username: user.username } });
	} catch (err) {
		res.status(500).json({ msg: "Server error" });
	}
});

module.exports = router;
