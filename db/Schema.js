const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const buttonsSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: String,
  colors: Array,
  sizes: Array,
  description: String,
  selectedSize: String,
  selectedColor: String,
  selectedQty: Number
}
);

const Buttons = mongoose.model('Buttons', buttonsSchema);

module.exports = Buttons;