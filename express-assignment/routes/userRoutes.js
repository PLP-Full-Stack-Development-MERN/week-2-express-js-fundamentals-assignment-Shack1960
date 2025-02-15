const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Mock user data
let users = [
  { id: 1, name: 'John Kimani' },
  { id: 2, name: 'Jane Simba' },
  { id: 3, name: 'Jemimah Makena'},
  { id: 4, name: 'Victoria Chumo'},
  { id: 5, name: 'Peter Rumba'}
];

// Middleware to attach users to request
router.use((req, res, next) => {
  req.users = users;
  next();
});

// User routes
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


module.exports = router;
