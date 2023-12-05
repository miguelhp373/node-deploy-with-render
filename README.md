# REST API For Tests

This is an example of a local API using Express.js. The API allows manipulating a collection of users by providing operations such as listing all users, getting a user by ID, adding a new user, updating an existing user, and deleting a user.

## Technologies
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Configuration

Make sure you have Node.js installed on your machine.

1. Clone the repository or create a new directory for the project.
2. Navigate to the project's root directory.

## Installation

Run the following command to install the necessary dependencies:

```
npm install
```

## Running the API

Run the following command to start the API on a local server:

```
npm start
```

The server will be started at `localhost:3000`.

## Endpoints

### List all users

Returns a list of all users.

- **URL:** `/users/all`
- **Method:** `GET`
- **Success response:** Status 200 (OK)
- **Example response:**

```json
[
  {
    "id": "cd1c78e4-5a3d-4d57-b832-784fb5ce6730",
    "name": "John Doe",
    "date_created": "2023-05-25T12:34:56.789Z",
    "image_link": "https://source.unsplash.com/random/200x200/?person"
  },
  {
    "id": "42cf52da-7a5a-487b-a0de-89474f158ed0",
    "name": "Jane Smith",
    "date_created": "2023-05-25T12:34:56.789Z",
    "image_link": "https://source.unsplash.com/random/200x200/?face"
  }
]
```

### Get a user by ID

Returns a single user based on the provided ID.

- **URL:** `/users/:id`
- **Method:** `GET`
- **Path parameter:** `id` (string) - The user ID
- **Success response:** Status 200 (OK)
- **User not found response:** Status 404 (Not Found)
- **Example response for found user:**

```json
{
  "id": "cd1c78e4-5a3d-4d57-b832-784fb5ce6730",
  "name": "John Doe",
  "date_created": "2023-05-25T12:34:56.789Z",
  "image_link": "https://source.unsplash.com/random/200x200/?person"
}
```

### Add a new user

Adds a new user to the collection.

- **URL:** `/users`
- **Method:** `POST`
- **Request body:** JSON object containing user data (name)
- **Success response:** Status 200 (OK)
- **Example request body:**

```json
{
  "name": "Emily Brown"
}
```

- **Example success response:**

```json
{
  "id": "12345678-abcd-efgh-ijkl-1234567890ab",
  "name": "Emily Brown",
  "date_created": "2023-05-25T12:34:56.789Z",
  "image_link": "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg"
}
```

### Update an existing user

Updates the details of an existing user based on the provided ID.

- **URL:** `/users/:id`
- **Method:** `PATCH`
- **Path parameter:** `id` (string) - The user ID
- **Request body:** JSON object containing the user data to be updated (name)
- **Success response:** Status 200 (OK)
- **User not found response:** Status 404 (Not Found)
- **Example request body:**

```json
{
  "name": "New user name"
}
```

- **Example success response:**

```json
{
  "id": "cd1c78e4-5a3d-4d57-b832-784fb5ce6730",
  "name": "New user name",
  "date_created": "2023-05-25T12:34:56.789Z",
  "image_link": "https://source.unsplash.com/random/200x200/?person"
}
```

### Delete a user

Deletes a user from the collection based on the provided ID.

- **URL:** `/users/:id`
- **Method:** `DELETE`
- **Path parameter:** `id` (string) - The user ID
- **Success response:** Status 200 (OK)
- **User not found response:** Status 404 (Not Found)
- **Example success response:**

```json
{
  "message": "User deleted successfully"
}
```

## CORS

The API has been configured to allow Cross-Origin Resource Sharing (CORS). The CORS settings include allowing all origins to access the API, allowing credentials, setting allowed headers, and allowed methods. These settings are applied to all API routes.

```javascript
const cors = require('cors');

const corsOptions = {
  origin: '*', // Defines the allowed origin (all domains)
  credentials: true, // Allows the use of cookies and authorization headers with HTTPS
  allowedHeaders: 'Origin,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,locale', // Defines the allowed headers
  methods: 'GET,PUT,POST,PATCH,DELETE,OPTIONS' // Defines the allowed methods
};

const corsMiddleware = cors(corsOptions);

userRoutes.use(corsMiddleware); // Applies the cors middleware
```

This allows you to make requests to the API from any origin, using the specified methods and headers.

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.
