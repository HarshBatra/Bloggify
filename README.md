# Bloggify - MERN Stack Blog App

Bloggify is a full-stack blog application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). It provides users with the ability to register, login, create, edit, and delete blog posts, as well as comment on posts. The application uses JWT for user authentication, bcrypt for password hashing, multer for handling images, and Vite as the bundler.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication with email and password using JWT.
- Passwords are securely hashed using bcrypt.
- View and search through all blog posts.
- Create, edit, and delete your own blog posts.
- Upload images for blog posts using multer.
- Comment on blog posts and delete your own comments.
- Profile page to view and edit user details.
- My Blogs page to see the blogs posted by the logged-in user.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HarshBatra/bloggify.git
   cd bloggify
   ```

2. Install dependencies for both the client and server:

   ```bash
   cd frontend
   npm install
   ```

   ```bash
   cd ../backend
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following:

   ```env
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   PORT=3001
   ```

   Replace `your-mongodb-uri` with your MongoDB connection URI and `your-jwt-secret` with a secret key for JWT.

4. Create a `.env` file in the frontend directory and add the following:

   ```env
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   PORT=3001
   ```

5. Run the server and client:

   ```bash
   cd backend
   npm start
   ```

   ```bash
   cd ../frontend
   npm start
   ```

   The backend (server) will run on http://localhost:3001, and the frontend (client) will run on http://localhost:3000.

## Usage

1. Open the application in your browser and register/login.
2. Explore all blog posts, search for specific posts using the search bar.
3. Create your own blog posts, edit or delete them as needed.
4. Visit the Profile page to view and edit your details.
5. Check the My Blogs page to see the blogs you've posted.
6. Comment on any blog post and delete your own comments.

## Folder Structure

The project has the following folder structure:

- `frontend`: Frontend code using React.js and Tailwind CSS.
- `backend`: Backend code using Node.js, Express.js, and MongoDB.

## Technologies Used

- **Frontend:**

  - React.js
  - Tailwind CSS

- **Backend:**

  - Node.js
  - Express.js
  - MongoDB with Mongoose

- **Authentication:**

  - JSON Web Token (JWT)

- **Password Hashing:**

  - bcrypt

- **Image Handling:**

  - multer

- **Bundling:**
  - Vite

## Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.
