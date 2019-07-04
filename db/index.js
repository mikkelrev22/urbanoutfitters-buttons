const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/buttons';

const db = mongoose.connect(mongoUri);

module.exports = db;