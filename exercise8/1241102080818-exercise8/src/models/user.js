const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Id: { type: Number, required: true }, // Custom Id field
    UserName: { type: String, required: true },
    Password: { type: String, required: true },
    Email: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);


