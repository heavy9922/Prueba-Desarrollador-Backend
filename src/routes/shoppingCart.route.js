const express = require('express');
const shoppingCartServices = require('../services/shoppingCart.services');
const validatorHandler = require('../middlewares/validator.handler');
const { createshoppingCartSchema } = require('../schema/shoppingCart.schema');

const router = express.Router();
const services = new shoppingCartServices();

router.get('/', async (req, res) => {
  const cart = await services.find();
  res.json(cart);
});

router.post(
  '/',
  validatorHandler(createshoppingCartSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newCart = await services.create(body);
    res.status(201).json(newCart);
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await services.delete(id);
  res.json(rta);
});

module.exports = router;
