// Get all users
const getUsers = (req, res) => {
  res.json(req.users);
};

// Get a single user by ID
const getUserById = (req, res) => {
  const user = req.users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

// Create a new user
const createUser = (req, res) => {
  const newUser = {
    id: req.users.length + 1,
    name: req.body.name
  };
  req.users.push(newUser);
  res.status(201).json(newUser);
};

// Update a user
const updateUser = (req, res) => {
  const user = req.users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.name = req.body.name;
  res.json(user);
};

// Delete a user
const deleteUser = (req, res) => {
  const userIndex = req.users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

  req.users.splice(userIndex, 1);
  res.status(204).send();
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
