const boom = require('@hapi/boom');

const products = require('../models/product.model');

class ProductsServices {
  constructor() {
    this.products = [];
  }

  async find() {
    return await products.find().exec();
  }

  async findOne(id) {
    const product = await products.findById(id).exec();
    return product;
  }

  async create(data) {
    const newProduct = products(data);
    return await newProduct.save();
  }

  async update(id, changes) {
    console.log(changes);
    console.log(id)
    const upProduct = await products.findByIdAndUpdate(
      id,
      { $set: changes },
      { new: true }
    ).exec();
    return upProduct;
  }

  async delete(id) {
    return await products.findByIdAndDelete(id)
  }
}

module.exports = ProductsServices;
