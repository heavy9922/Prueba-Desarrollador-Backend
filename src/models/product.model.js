const mongoose = require('mongoose');

const productModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productModel);
