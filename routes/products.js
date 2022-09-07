const express = require('express');
const ProductsService = require('../services/products.service')
const validatorHandler = require('../middlewares/validator.handler');

const {createProductsSchema, updateProductsSchema, getProductsSchema} = require('../schema/product.schema');

const router = express.Router();

const service = new ProductsService();

router.get('/', async (req, res) => {
    const products = await service.find()
    res.json(products)
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await service.findById(id);
    res.json(product)
  }
);

router.post('/', validatorHandler(createProductsSchema, 'body'), async (req, res) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.json(newProduct);
    } catch (error) {
      res.status(404).json({
        message: error
      })
    }
  }
);

router.patch('/:id',
    validatorHandler(getProductsSchema, 'params'),
    validatorHandler(updateProductsSchema, 'body'),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        const body = req.body;
        const product = await service.update(id, body);
        res.json(product)
      } catch (error) {
          next(error)
      }
    }
);

router.delete('/:id',
  validatorHandler(getProductsSchema, 'params'),
  validatorHandler(updateProductsSchema, 'body'),
  async (req, res) => {
    const { id } = req.params;
    const product = await service.delete(id);
    res.json(product)
  }
);

module.exports = router;
