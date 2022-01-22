const express = require('express')

const productsRouter = require('./pruducts.route');
const shoppingCartRouter = require('./shoppingCart.route');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/cart', shoppingCartRouter);
}
module.exports = routerApi;
