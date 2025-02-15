# Express.js Fundamentals Assignment

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone <>
   cd express-assignment
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the server:
   ```sh
   node index.js
   ```

4. The server will be running on `http://localhost:3000`

## API Documentation

### Users

- **GET /api/users** - Get all users
- **GET /api/users/:id** - Get a single user by ID
- **POST /api/users** - Create a new user
  ```json
  {
    "name": "New User"
  }
  ```
- **PUT /api/users/:id** - Update a user
  ```json
  {
    "name": "Updated User"
  }
  ```
- **DELETE /api/users/:id** - Delete a user

### Products

- **GET /api/products** - Get all products
- **GET /api/products/:id** - Get a single product by ID
- **POST /api/products** - Create a new product
  ```json
  {
    "name": "New Product",
    "price": 19.99
  }
  ```
- **PUT /api/products/:id** - Update a product
  ```json
  {
    "name": "Updated Product",
    "price": 29.99
  }
  ```
- **DELETE /api/products/:id** - Delete a product

## Error Handling

- **404 Not Found** - Route not found
- **500 Internal Server Error** - Something went wrong on the server

## Testing

Test the API using tools like Postman or cURL.

Example cURL commands:
```sh
# Get all users
curl http://localhost:3000/api/users

# Create a new user
curl -X POST -H "Content-Type: application/json" -d '{"name":"Ethan Hawke"}' http://localhost:3000/api/users
