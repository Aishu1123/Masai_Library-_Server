markdown
Copy code
# Masai Library API Documentation

## Introduction

Welcome to the documentation for the Masai Library backend API. This API allows users to browse and purchase books online. It is built using Node.js, Express.js, and MongoDB (NEM) as the backend stack.

## Base URL

The base URL for all API endpoints is: `https://masai-library-backend./api`

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


