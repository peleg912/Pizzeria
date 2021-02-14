const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messagesSchema = new Schema({
    name: String,
    email: String,
    msg: String
});

module.exports = mongoose.model('Messagaes', messagesSchema);