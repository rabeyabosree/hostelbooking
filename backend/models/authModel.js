const mongoose = require('mongoose');

const authShcema = new mongoose.Schema({
    name: {
        type: String,
        requied: true
    },
    email: {
        type: String,
        requied: true,
        unique: true
    },
    password: {
        type: String,
        requied: true
    },
    role: {
        type: [" admin", "user"],
        default: "user"
    }

})

const User = mongoose.model("user", authShcema);
module.exports = User;