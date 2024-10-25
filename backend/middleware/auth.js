

const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) {
            console.log("No token or token format invalid");
            return res.status(401).json({ msg: "No authentication token, access denied" });
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (!verified) return res.status(401).json({ msg: "Token verification failed, access denied" });
        req.user = verified.id;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = auth;


