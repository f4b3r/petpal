# PetPal

PetPal is an application that helps people find pet sitters. It provides a platform where pet owners can connect with reliable and trustworthy pet sitters in their area. The project is built using ReactJS for the frontend, Spring Boot for the backend, and utilizes Keycloak for authentication and authorization. The application database is powered by MySQL.

## Features

- User Registration and Authentication: Users can create accounts, log in, and securely authenticate using either Keycloak or Spring Security, depending on the branch they choose.
- Pet Sitter Search: Pet owners can search for available pet sitters based on their location and specific pet care requirements.
- Booking Management: Users can schedule and manage bookings with pet sitters through the application.
- Ratings and Reviews: Users can provide ratings and reviews for pet sitters based on their experience.
- Chat: Users can send messagges to other users.
- Email Verification: The application includes an email verification system. When a user registers, an email is sent to their provided email address with a verification link. The PetPal-Subscription module handles the email verification process and communicates with the application via Kafka events.
- Kafka Integration: The PetPal application integrates with Kafka to facilitate communication between different modules. Kafka is used for sending events related to email verification and other asynchronous operations.
- Subscription Module: The PetPal-Subscription module stores email verification tokens in a MongoDB collection. It provides endpoints for handling email verification requests and is responsible for generating and validating verification tokens.
## Technologies Used

- Frontend: ReactJS, Semantic UI React
- Backend: Spring Boot
- Authentication: Keycloak (branch: auth_keycloak), Spring Security (branch: auth_spring_security), PostgreSQL
- Database: MySQL
- Containerization: Docker, Docker Compose

## Getting Started

To get started with PetPal, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Run maven build of backend projects
3. Run docker-compose-up
4. Run the front-end application (npm start from front-end root folder )
5. Build the Docker containers using the provided Docker Compose file.
6. Start the application by running the Docker containers.

* Please note that the environment configuration of the petpal-subscription module has been externalized in a txt file
    Set up the required environment variables for the PetPal-Subscription module by creating a file named env.txt under the module root folder with the following variables defined:
  

````
  LOG_LEVEL=DEBUG
  JAVA_DEBUG=true
  JAVA_DEBUG_PORT=*:5005
  JAVA_TOOL_OPTIONS=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005
  KAFKA_BROKER=kafka:9092
  KAFKA_TOPIC=ON_REGISTRATION_COMPLETE
  MONGO_DB=petpal_db
  MONGO_HOST=localhost
  MONGO_PORT=27017
  MONGO_USER=user
  MONGO_PASSWORD=pass
  SPRING_DATA_MONGODB_URI=mongodb://user:pass@mongodb:27017/petpal_db
  MONGO_INITDB_ROOT_USERNAME=user
  MONGO_INITDB_ROOT_PASSWORD=pass
  MONGO_INITDB_DATABASE=petpal_db
  MAIL_TRAP_USERNAME=yyyyyyyyy
  MAIL_TRAP_PASSWORD=xxxxxxxxxx
````

## Folder Structure

The project follows a specific folder structure to keep the code organized. Here's an overview:

- `petpal-client/`: Contains the ReactJS frontend code.
- `backend/`: Contains the Spring Boot backend code.
- `docker/`: Contains the Docker-related configuration files, including the Docker Compose file.

## Contributing

Contributions to PetPal are welcome! If you encounter any issues, have suggestions, or would like to contribute new features, please create a pull request. Be sure to follow the project's coding style and guidelines.


