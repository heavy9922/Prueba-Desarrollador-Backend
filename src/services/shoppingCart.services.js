const boom = require('@hapi/boom');

const shoppingCart = require('../models/shoppingCart.model');

class shoppingCartServices {
  constructor() {
    this.shoppingCart = [];
  }

  async find() {
    return await shoppingCart.find().exec();
  }

  async findOne(id) {
    const Cart = await shoppingCart.findById(id).exec();
    return Cart;
  }

  async create(data) {
    const newCart = shoppingCart(data);
    return await newCart.save();
  }

  async update(id, changes) {
    console.log(changes);
    console.log(id)
    const upCart = await shoppingCart.findByIdAndUpdate(
      id,
      { $set: changes },
      { new: true }
    ).exec();
    return upCart;
  }

  async delete(id) {
    return await shoppingCart.findByIdAndDelete(id)
  }
}

module.exports = shoppingCartServices;
