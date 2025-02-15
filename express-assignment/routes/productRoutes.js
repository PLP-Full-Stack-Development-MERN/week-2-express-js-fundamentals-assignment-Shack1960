const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Mock product data
let products = [
  { id: 1, name: 'Product A', price: 19.99 },
  { id: 2, name: 'Product B', price: 29.99 }
];

// Middleware to attach products to request
router.use((req, res, next) => {
  req.products = products;
  next();
});

// Product routes
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);


module.exports = router;
