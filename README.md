markdown
Copy code
# Masai Library API Documentation

## Introduction

Welcome to the documentation for the Masai Library backend API. This API allows users to browse and purchase books online. It is built using Node.js, Express.js, and MongoDB (NEM) as the backend stack.

## Base URL

The base URL for all API endpoints is: `https://masai-library-backend.herokuapp.com/api`

## Authentication

To access protected routes, users need to register and login. Authentication is done via JWT token-based authorization.

## API Endpoints

### Register

- **Method:** POST
- **Endpoint:** `/register`
- **Description:** Allows customers to register. Hashes the password on store.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password"
  }
Response:
Status Code: 201
Response Body:
json
Copy code
{
  "message": "User registered successfully"
}
Login
Method: POST
Endpoint: /login
Description: Allows customers to login. Returns a JWT token on login.
Request Body:
json
Copy code
{
  "email": "john@example.com",
  "password": "password"
}
Response:
Status Code: 200
Response Body:
json
Copy code
{
  "token": "<JWT token>"
}
Get All Books
Method: GET
Endpoint: /books
Description: Returns a list of all available books.
Response:
Status Code: 200
Response Body: Array of book objects
Get Book by ID
Method: GET
Endpoint: /books/:id
Description: Returns the details of a specific book identified by its ID.
Response:
Status Code: 200
Response Body: Book object
Get Books by Category
Method: GET
Endpoint: /books?category=fiction
Description: Returns books whose category is fiction.
Response:
Status Code: 200
Response Body: Array of book objects
Get Books by Author and Category
Method: GET
Endpoint: /books?author=corey&category=fiction
Description: Returns books whose author is corey and category is fiction.
Response:
Status Code: 200
Response Body: Array of book objects
Add New Book
Method: POST
Endpoint: /books
Description: Allows admin to add new books to the system. (Protected Route)
Request Body:
json
Copy code
{
  "title": "Book Title",
  "author": "Author Name",
  "category": "fiction",
  "price": 10.99,
  "quantity": 10
}
Response:
Status Code: 201
Response Body: Newly added book object
Update Book by ID
Method: PUT / PATCH
Endpoint: /books/:id
Description: Allows admin to update the details of a specific book identified by its ID. (Protected Route)
Request Body: Fields to be updated
Response:
Status Code: 204
Delete Book by ID
Method: DELETE
Endpoint: /books/:id
Description: Allows admin to delete a specific book identified by its ID. (Protected Route)
Response:
Status Code: 202
Place Order
Method: POST
Endpoint: /order
Description: Allows the customer to place an order for a list of books. (Protected Route)
Request Body:
json
Copy code
{
  "userId": "<user_id>",
  "books": ["<book_id_1>", "<book_id_2>"],
  "totalAmount": 25.99
}
Response:
Status Code: 201
Response Body: Newly created order object
Get All Orders
Method: GET
Endpoint: /orders
Description: Allows admin to view all the orders placed so far with user and book details. Populates both user and book data.
Response:
Status Code: 200
Response Body: Array of order objects with populated user and book details
vbnet
Copy code

This is a basic documentation structure. You can further enhance it by adding details 
