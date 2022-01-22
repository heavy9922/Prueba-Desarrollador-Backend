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
      id:product.id,
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

  async deleteItemCart(id, idProduct) {
    const findProduct = await shoppingCart.findById(id)
    let removeItem  = findProduct.products
    console.log(removeItem.length, 1)
    let found = removeItem.find(item => item.id === idProduct)
    if(found){
      removeItem.pull(found)
    }
    console.log(removeItem.length)
    const upCart = await shoppingCart
      .findByIdAndUpdate(id, { $set: { products: removeItem } }, { new: true })
      .exec();
    return upCart;
  }

  async delete(id) {
    return await shoppingCart.findByIdAndDelete(id);
  }
}

module.exports = shoppingCartServices;
