# Get environment variables API
The application uses the @nestjs/config module to manage environment variables and configuration files. It provides a convenient way to handle configuration settings.

# 1. Getting Started
Install node modules: `npm install`

## 1.1.Build a Docker image and Run the Docker container
 `docker build -t your-image-name .`

 `docker run -p 3000:3000 your-image-name`

## 1.2. Include a .env file
Please follow the .env.example file.

Your .env should contain the following elements: 

> PROD_HOST="production"

## 1.3. Scripts
### Run the development server
Run the code with auto restart: `npm run start:dev`
### Run unit tests
Run the code with auto restart: `npm test`
### Build the application
Compile the code into javascript files: `npm run build`
### Start the application
Executes your generated build files: `npm run start`

## 1.4. Swagger documentation
After running the development server by `npm run start:dev`, go to the following url `http://locahost:3000/swagger` 
to browse the api endpoints documentation and examples.


# 2. Requirements
Writing a Github Backend API server which eventually collect the data from Github & caches it in REDIS.

### 2.1 Search Endpoint:  `/getProductionHost`
* return env value PROD_HOST

### 2.2 Search Endpoint:  `/hello`
* return always-on

# 3. Implementation

## 3.1 Dependencies
This project was build with the following dependencies:

- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
  Allows serving auto-generated swagger-ui docs based on a swagger.json file.

- [config-module](https://docs.nestjs.com/techniques/configuration)
  ConfigModule that exposes a ConfigService which loads the appropriate .env file.