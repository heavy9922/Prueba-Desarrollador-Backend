const joi = require('joi');

const fullName = joi.string().min(3).max(30);
const products = joi.array();
const quantity = joi.number().min(1);

const createshoppingCartSchema = joi.object({
  fullName: fullName.required(),
  products: products,
  quantity: quantity.required(),
});

module.exports = {
  createshoppingCartSchema,
};
