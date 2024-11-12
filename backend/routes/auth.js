const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, UserLogin } = require('../models/User');

const auth = require('../middleware/auth');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, email, phone, password } = req.body;
    // console.log(req.body, username, email, phone, password, "**********************")
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, phone, password: hashedPassword })
        await newUser.save()
        res.status(200).send("User registered successfully")
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})


router.post('/login', async (req, res) => {
    console.log(req.body)
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username: username })
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(401).json({ msg: "User not found" })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
        res.json({ token })
    } catch (err) {
        console.log("Error in login: ", err);
        res.status(500).json({ error: err.message })
    }

})

router.get('/dashboard', auth, (req, res) => {
    res.send('This is a protected route');
});

module.exports = router