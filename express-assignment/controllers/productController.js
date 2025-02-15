// Get all products
const getProducts = (req, res) => {
  res.json(req.products);
};

// Get a single product by ID
const getProductById = (req, res) => {
  const product = req.products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

// Create a new product
const createProduct = (req, res) => {
  const newProduct = {
    id: req.products.length + 1,
    name: req.body.name,
    price: req.body.price
  };
  req.products.push(newProduct);
  res.status(201).json(newProduct);
};

// Update a product
const updateProduct = (req, res) => {
  const product = req.products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });

  product.name = req.body.name;
  product.price = req.body.price;
  res.json(product);
};

// Delete a product
const deleteProduct = (req, res) => {
  const productIndex = req.products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex === -1) return res.status(404).json({ message: 'Product not found' });

  req.products.splice(productIndex, 1);
  res.status(204).send();
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
