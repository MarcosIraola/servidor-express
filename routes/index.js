const express = require('express');

const productsRouter = require('./products');
const usersRouter = require('./users')


function routerApi(app) {

  const router = express.Router();
  app.use('/api', router);

  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;

// const productsRouter=require('./products');
// function routerApi(app){
//   app.use('/products',productsRouter);
// }
// module.exports=routerApi;
