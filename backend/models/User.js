const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
});
const userLogin = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

const User = mongoose.model('User', UserSchema);
const UserLogin = mongoose.model('UserLogin', userLogin);

module.exports = { User, UserLogin };
