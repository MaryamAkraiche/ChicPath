const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true }, 
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
  sizes: { type: [String], default: [] }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
