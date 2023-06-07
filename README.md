# PetPal

PetPal is an application that helps people find pet sitters. It provides a platform where pet owners can connect with reliable and trustworthy pet sitters in their area. The project is built using ReactJS for the frontend, Spring Boot for the backend, and utilizes Keycloak for authentication and authorization. The application database is powered by MySQL.

## Features

- User Registration and Authentication: Users can create accounts, log in, and securely authenticate using Keycloak.
- Pet Sitter Search: Pet owners can search for available pet sitters based on their location and specific pet care requirements.
- Booking Management: Users can schedule and manage bookings with pet sitters through the application.
- Ratings and Reviews: Users can provide ratings and reviews for pet sitters based on their experience.
- Chat: Users can send messagges to other users.

## Technologies Used

- Frontend: ReactJS, Semantic UI React
- Backend: Spring Boot
- Authentication: Keycloak, PostgreSQL
- Database: MySQL
- Containerization: Docker, Docker Compose

## Getting Started

To get started with PetPal, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Run docker-compose-up
3. Run the front-end application (npm start from front-end root folder )
4. Build the Docker containers using the provided Docker Compose file.
5. Start the application by running the Docker containers.

## Folder Structure

The project follows a specific folder structure to keep the code organized. Here's an overview:

- `petpal-client/`: Contains the ReactJS frontend code.
- `backend/`: Contains the Spring Boot backend code.
- `docker/`: Contains the Docker-related configuration files, including the Docker Compose file.

## Contributing

Contributions to PetPal are welcome! If you encounter any issues, have suggestions, or would like to contribute new features, please create a pull request. Be sure to follow the project's coding style and guidelines.


