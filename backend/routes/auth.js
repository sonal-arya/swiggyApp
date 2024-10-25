const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, UserLogin } = require('../models/User');

const auth = require('../middleware/auth');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, email, phone, password } = req.body;
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
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username: username })
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(401).json({ msg: "User not found" })
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
        res.status(200).json({ token: token , msg:"User login successfully"})
    } catch (err) {
        console.log("Error in login: ", err);
        res.status(500).json({ error: err.message })
    }

})

router.get('/user', auth, async (req, res) => {
    try{
        console.log( req.user , "User not found");
        const user = await User.findById(req.user).select('-password');
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        res.json(user);
    }catch(err){
        console.error(err.message);
        res.status(500).send('sever error');

    }
});

module.exports = router