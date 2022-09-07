const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const image = Joi.string().uri();
const price = Joi.number().integer().min(10);

const createProductsSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
})

const updateProductsSchema = Joi.object({
  name: name,
  price: price,
  image: image,
})

const getProductsSchema = Joi.object({
  id: id.required()
})

module.exports = { createProductsSchema, updateProductsSchema, getProductsSchema }
