const mongoose = require('mongoose');

const shoppingCartModel = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  products:{
    type: Array,
    required: true,
  },
  quantity:{
    type: Number,
    required: true,
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('shoppingCart', shoppingCartModel);
