## Introduction to the Blog Project API

The Blog Project API is built using **Node.js**, **TypeScript**, and **Express.js** for the backend, with **MongoDB** and **Mongoose** for data management. It allows users to create, manage, and interact with blog posts, while supporting role-based access for Admin and User roles.

#### Highlighted Features:

1. **User Management**
  - Users can register, log in, and manage their blogs.
  - Admins have the ability to manage users (block or delete).

2. **Blog Management**
  - Create, update, delete, and retrieve blogs.
  - Public API for blog access with search, sort, and filter functionalities.

3. **Authentication & Authorization**
  - Secure login using JWT tokens.
  - Role-based access control (Admin/User).

---

### Installation Guide

#### Prerequisites

- Ensure **Node.js** (version 16 or higher) is installed.
- A running **MongoDB** instance or cloud connection.

#### Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/Blog-Project.git
   cd Blog-Project
   ```

2. **Install Dependencies**

   ```bash
   yarn install
   ```

3. **Environment Variables**
   Create a `.env` file with the following configurations:

   ```plaintext
   PORT=5000
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

4. **Run the Application**
   For development:

   ```bash
   yarn start-dev
   ```

   For production:

   ```bash
   yarn start-prod
   ```

---

### Available Endpoints

#### Authentication

| Method | Endpoint           | Description                            |
| ------ | ------------------ | -------------------------------------- |
| POST   | `/api/auth/register` | Register a new user                    |
| POST   | `/api/auth/login`    | Login a user and receive a JWT token   |

#### Blog Management

| Method | Endpoint           | Description                               |
| ------ | ------------------ | ----------------------------------------- |
| POST   | `/api/blogs`        | Create a new blog post                   |
| PATCH  | `/api/blogs/:id`    | Update an existing blog post             |
| DELETE | `/api/blogs/:id`    | Delete a specific blog post              |
| GET    | `/api/blogs`        | Retrieve all blog posts                  |
| GET    | `/api/blogs/:id`    | Get details of a specific blog post      |

#### Admin Actions

| Method | Endpoint               | Description                              |
| ------ | ---------------------- | ---------------------------------------- |
| PATCH  | `/api/admin/users/:userId/block` | Block a user                          |
| DELETE | `/api/admin/blogs/:id` | Delete any blog post by its ID           |

---

## Available Scripts

- **`yarn start-dev`**: Start the app in development mode with hot reloading.
- **`yarn start-prod`**: Run the compiled app in production mode.
- **`yarn format`**: Format the code using Prettier.
- **`yarn lint`**: Check for linting errors using ESLint.
- **`yarn lint:fix`**: Fix linting issues automatically.

---

## Dependencies

### Core Dependencies

- **Express**: Web framework for building APIs.
- **Mongoose**: ODM for MongoDB.
- **dotenv**: Environment variable management.
- **cors**: Enable cross-origin requests.

### Development Dependencies

- **TypeScript**: Type-safe JavaScript.
- **ts-node-dev**: Hot reloading for development.
- **ESLint**: Static code analysis.
- **Prettier**: Code formatter.

---

## Contributing

Contributions are welcome! Please fork this repository, create a feature branch, and submit a pull request.

## License

This project is licensed under the [ISC License](LICENSE).