const joi = require('joi');
joi.objectId = require('joi-objectid')(joi);

const id = joi.objectId();
const name = joi.string().min(3).max(30);
const price = joi.number().integer().min(10);
const image = joi.string().uri();
const description = joi.string().min(3).max(100);
const stock = joi.number().integer().min(1);

const createProductSchema = joi.object({
  name: name.required(),
  description: description.required(),
  price: price.required(),
  stock: stock.required(),
  image: image.required(),
});

const updateProductSchema = joi.object({
  price: price,
  name: name,
  image: image,
  description: description,
  stock: stock,
});

const getProductSchema = joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
