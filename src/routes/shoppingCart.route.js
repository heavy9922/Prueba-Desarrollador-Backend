const express = require('express');
const shoppingCartServices = require('../services/shoppingCart.services');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createshoppingCartSchema,
} = require('../schema/shoppingCart.schema');

const router = express.Router();
const services = new shoppingCartServices();

router.get('/', async (req, res) => {
  const cart = await services.find();
  res.json(cart);
});

router.post(
  '/:idProduct',
  validatorHandler(createshoppingCartSchema, 'body'),
  async (req, res) => {
    const { idProduct } = req.params;
    const body = req.body;
    const newCart = await services.create(body, idProduct);
    res.status(201).json(newCart);
  }
);

router.put(
  '/:id/product/:idProduct',
  async (req, res) => {
    try {
      const { id, idProduct  } = req.params;
      const product = await services.update(id, idProduct );
      res.json(product);
    } catch (e) {
      console.error(e);
    }
  }
);

router.put(
  '/:id/item/product/:idProduct',
  async (req, res) => {
    try {
      const { id, idProduct  } = req.params;
      const product = await services.deleteItemCart(id, idProduct );
      res.json(product);
    } catch (e) {
      console.error(e);
    }
  }
);


router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await services.delete(id);
  res.json(rta);
});

module.exports = router;
