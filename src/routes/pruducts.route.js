const express = require('express');
const ProductsServices = require('../services/products.services');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('../schema/product.schema');

const router = express.Router();
const services = new ProductsServices();

router.get('/', async (req, res) => {
  const products = await services.find();
  res.json(products);
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const products = await services.findOne(id);
      res.json(products);
    } catch (error) {
      res.json({
        message: 'product not found',
        id,
      });
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await services.create(body);
    res.status(201).json(newProduct);
  }
);

router.put(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await services.update(id, body);
      res.json(product);
    } catch (e) {
      res.json({
        message: 'product not found',
        id,
      });
    }
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await services.delete(id);
  res.json(rta);
});

module.exports = router;
