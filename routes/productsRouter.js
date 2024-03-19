const express = require('express');

const { faker } = require('@faker-js/faker');
const ProductService = require('../services/product.services');

const router = express.Router();

const service = new ProductService();

router.get('/', (req, res) => {
  const products = [];
  for (let i = 0; i < 10; i++) {
    products.push({
      id: i,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      image: faker.image.url(),
    });
  }
  res.json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: `Producto ${req.params.id}`,
    price: 100,
  });
});
router.post('/', (req, res) => {
  const  body  = req.body;
  res.status(201).json({
    message: 'Producto creado',
    data: body,
  });
});
router.post('/:id', (req, res) => {
  const { id } = req.params;
  if (id === '999') {
    res.status(404).json({
      message: 'Producto no encontrado',
      id,
    });
  }

});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Producto actualizado',
    data: {
      id,
      ...body,
    },
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Producto eliminado',
    id,
  });
});




module.exports = router;
