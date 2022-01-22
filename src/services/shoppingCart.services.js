const boom = require('@hapi/boom');

const shoppingCart = require('../models/shoppingCart.model');

const productServices = require('./products.services');
const services = new productServices();

class shoppingCartServices {
  constructor() {
    this.shoppingCart = [];
  }

  async find() {
    return await shoppingCart.find().exec();
  }

  async create(data, idProduct) {
    const newCart = shoppingCart(data);
    const product = await services.findOne(idProduct);
    let object = {
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
    };
    let products = [];
    products.push(object);
    newCart.products = products;
    return await newCart.save();
  }

  async update(id, idProduct) {
    const product = await services.findOne(idProduct);
    let object = {
      id:product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
    };
    let newProduct = [];
    newProduct.push(object);
    const upCart = await shoppingCart
      .findByIdAndUpdate(id, { $push: { products: newProduct } }, { new: true })
      .exec();
    return upCart;
  }

  async delete(id) {
    return await shoppingCart.findByIdAndDelete(id);
  }
}

module.exports = shoppingCartServices;
