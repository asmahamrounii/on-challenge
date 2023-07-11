This README provides an overview of the Nest.js application, explaining its structure, features, and how to run and test it. It covers the following topics:

1. Config Module

handled using the @nestjs/config module, which provides a convenient way to manage environment variables and configuration files.

2. Interceptors

Interceptors are used to modify or handle incoming requests and outgoing responses globally across the application. They can be used to implement cross-cutting concerns such as logging, authentication, or adding headers to responses.

we have the OnRunningHeaderInterceptor that adds a custom header 'on-running' with the value 'always' to all outgoing responses.

3. Unit Tests

Unit tests are used to test individual units of code in isolation to ensure they behave as expected. In your application, you can write unit tests for modules, services, and controllers to verify their functionality.

To run the unit tests, you can use the following command:

$ npm run test

The unit tests are written using the Jest testing framework. 

4. End-to-End (E2E) Tests

This application includes End-to-End (E2E) tests to ensure the correct behavior and integration of the different components. E2E tests simulate real-world scenarios and test the application as a whole.

To run the E2E tests, follow these steps:

Make sure the application is running locally or in the desired environment.

Run the following command to execute the E2E tests:

# run e2e tests

npm run test:e2e


Running the E2E tests helps validate the overall functionality and integration of the application. It ensures that different components work together correctly and meet the expected behavior.

5. Swagger Documentation

This application includes Swagger for API documentation. Swagger provides a user-friendly interface to explore and interact with the available endpoints.

To access the Swagger UI and view the API documentation, follow these steps:

Start the application by running the appropriate command (e.g., npm run start, npm run start:dev, or npm run start:prod).

Open a web browser and navigate to http://localhost:3000/api. This will take you to the Swagger UI.

In the Swagger UI, you will find a list of available endpoints, along with detailed information about request/response structures, parameters, and more.

Explore the endpoints by expanding the API sections and interacting with the documentation. You can try out requests directly from the Swagger UI.

6. Dockerization

# Build a Docker image
docker build -t your-image-name .

# Run the Docker container
docker run -p 3000:3000 your-image-name

9. Getting Started

# Install dependencies
$ npm install

# Build the application
$ npm run build

# Start the application in development mode
$ npm run start:dev

# Run unit tests
$ npm test

# Run end-to-end (E2E) tests
$ npm run test:e2e

# on-challenge
