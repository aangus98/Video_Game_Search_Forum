
# **Video Game Search Forum - GAMEFO**

A full-stack web application that allows users to search for video games, write reviews, and recommend games to others. The application includes a user authentication system, game data search using an external API, and functionality to add game-related content like reviews and recommendations.

## **Table of Contents**

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## **Features**

- **User Authentication**: Users can register, log in, and manage their sessions via JSON Web Tokens (JWT).
- **Game Search**: Users can search for video games using data from the IGDB API.
- **Reviews**: Users can write and read reviews for various games.
- **Recommendations**: Users can recommend games to others based on their preferences.
- **Completion Times**: Track the time it takes to complete games.

## **Technologies**

- **Frontend**:
  - React (with Vite)
  - Axios for HTTP requests

- **Backend**:
  - Node.js (with Express)
  - Sequelize ORM for database interactions
  - PostgreSQL as the database
  - JWT for authentication
  - bcrypt for password hashing

- **Other Tools**:
  - TypeScript
  - Nodemon (for development)
  - ESLint for linting

## **Installation**

### **Prerequisites**

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

### **Steps**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/Video_Game_Search_Forum.git
   cd Video_Game_Search_Forum
   ```

2. **Install dependencies** for both frontend and backend:

   ```bash
   npm install
   ```

3. **Set up PostgreSQL database**:
   - Make sure PostgreSQL is running on your system.
   - Create a database:

     ```bash
     psql -U postgres
     CREATE DATABASE video_game_search_forum;
     ```

4. **Build and run the project**:

   - **Build the backend**:

     ```bash
     npm run buildBack
     ```

   - **Start the backend**:

     ```bash
     npm run startBack
     ```

   - **Start the frontend**:

     ```bash
     npm run startFront
     ```

## **Usage**

### **Local Development**

1. **Backend**:
   - To start the backend in development mode (with automatic restarts):

     ```bash
     npm run devBack
     ```

2. **Frontend**:
   - To start the Vite development server for the frontend:

     ```bash
     npm run startFront
     ```

### **Production**

- To build the frontend and backend for production:

  ```bash
  npm run buildFront
  npm run buildBack
  ```

- To run the production build:

  ```bash
  npm run startBack
  ```

## **API**

### **Authentication Endpoints**

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Log in and receive a JWT token.

### **Game Search**

- **POST /api/search**: Search for a video game by title.
  - **Request Body**:

    ```json
    {
      "query": "game title"
    }
    ```

### **Review Endpoints**

- **GET /api/reviews**: Get all reviews for a game.
- **POST /api/reviews**: Add a review for a game.
  - **Request Body**:

    ```json
    {
      "game_id": 1,
      "content": "Great game!",
      "score": 9
    }
    ```

### **Recommendation Endpoints**

- **GET /api/recommendations**: Get all recommendations.
- **POST /api/recommendations**: Recommend a game to another user.

## **Contributing**

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
