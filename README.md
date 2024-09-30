
# Apparel Disposal, Donation, and Recycling Platform (MVP)

## Project Overview

This project is a **Minimum Viable Product (MVP)** for a platform that allows users to submit information about their unused or worn-out apparel for proper disposal, donation, or recycling. The platform is built using **ReactJS** for the frontend, **Spring Boot** for the backend, **MySQL** as the database, and **JWT** for secure user authentication. Users can also upload photos of the apparel they wish to dispose of, donate, or recycle.

## Key Features

- **User Authentication**: Secure login and signup using JWT for token-based authentication.
- **Apparel Submission**: Users can submit information about apparel, including category, condition, disposal method, and an optional image upload.
- **Image Upload**: Users can upload a photo of the apparel, which is stored on the server, and the URL is saved in the database.
- **Submission History**: Users can view their previously submitted apparel, including uploaded images.
- **REST API**: The backend provides a RESTful API for managing apparel submissions and user authentication.

## Tech Stack

- **Frontend**: ReactJS, Axios
- **Backend**: Spring Boot, Spring Security, JWT for authentication
- **Database**: MySQL
- **Image Upload**: `MultipartFile` in Spring Boot to handle file uploads
- **Authentication**: JSON Web Tokens (JWT)

## Project Structure

### Backend (Spring Boot)

- **Controller Layer**: Handles HTTP requests related to user registration, login, and apparel submission.
- **Service Layer**: Contains business logic for handling user authentication and apparel submissions.
- **Repository Layer**: Interfaces with the database using Spring Data JPA.
- **Security Layer**: Configures JWT-based authentication and authorization.
- **File Upload**: A designated folder on the server stores images uploaded by users. The file paths are saved in the database.

### Frontend (ReactJS)

- **User Forms**: Forms for user registration, login, and apparel submission.
- **Axios**: Used for making API requests to the Spring Boot backend.
- **JWT**: Stored in the browser's local storage for maintaining user sessions.

## Features Implemented

### 1. **JWT Authentication**
- **Signup**: New users can register using their email, name, and password.
- **Login**: Registered users can log in, and a JWT is returned to maintain a secure session.
- **Protected Routes**: Only authenticated users can submit apparel and view their submission history.

### 2. **Apparel Submission with Image Upload**
- Users can submit the following details:
  - Category (e.g., T-shirt, Shoes, etc.)
  - Condition (e.g., New, Worn-out)
  - Disposal Method (Donate, Recycle, Throw away)
  - Optional image upload to showcase the apparel's condition.
- The image is stored on the server, and its file path is saved in the MySQL database.

### 3. **Submission History**
- Authenticated users can view a list of all apparel they've submitted, including details and uploaded images.

### 4. **MySQL Database**
- A simple table to store user information and apparel submission data, including the file path of uploaded images.

## How to Install and Run the Project

### Prerequisites

Ensure you have the following installed on your machine:

- **Java 8 or later**
- **Maven**
- **Node.js and npm**
- **MySQL**

### Backend (Spring Boot)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repository/apparel-mvp.git
   cd apparel-mvp/backend
   ```

2. **Configure MySQL database**:
   - Create a MySQL database named `apparel_mvp`.
   - Update the MySQL credentials in the `application.properties` file located in `src/main/resources/`.

   **application.properties**:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/apparel_mvp
   spring.datasource.username=root
   spring.datasource.password=your_password
   ```

3. **Run the backend server**:
   ```bash
   mvn spring-boot:run
   ```

   The backend server will run on `http://localhost:8080`.

### Frontend (ReactJS)

1. **Navigate to the frontend directory**:
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the frontend server**:
   ```bash
   npm start
   ```

   The frontend app will run on `http://localhost:3000`.

### API Endpoints

- **POST /api/auth/signup**: Register a new user.
- **POST /api/auth/login**: Authenticate a user and return a JWT token.
- **POST /api/apparel/submit**: Submit apparel details and optional image upload.
- **GET /api/apparel**: Get the submission history of the authenticated user.

### Running the Project

1. Start the MySQL server.
2. Run the backend Spring Boot server (as detailed above).
3. Start the frontend ReactJS development server.
4. Navigate to `http://localhost:3000` in your browser.
5. Register, log in, and start submitting apparel information!

### Screenshots

#### 1. **Signup Page**
A simple registration form for new users.

#### 2. **Apparel Submission Form**
A form where users can enter apparel details, upload an image, and submit it for donation, recycling, or disposal.

#### 3. **Submission History**
Displays a list of all the user’s previous submissions along with any uploaded images.

### Future Enhancements

- **Admin Dashboard**: Add an admin panel for managing users and submissions.
- **Third-party Integrations**: Integrate with donation centers, recyclers, or local government services.
- **Geolocation**: Suggest nearby disposal centers based on the user’s location.
- **Improved UI/UX**: Refine the frontend design for a better user experience.
