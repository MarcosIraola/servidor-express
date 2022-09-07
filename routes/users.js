const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 1;

  for (let index = 0; index < limit; index++) {
    users.push({
      name: faker.commerce.productName(),
      image: faker.image.imageUrl(),
    })
  }
    res.json(users)
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: "Marcos",
    image: faker.image.imageUrl(),
  })
});

module.exports = router;
