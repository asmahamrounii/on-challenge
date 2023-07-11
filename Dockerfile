# Use the official Node.js 16-alpine base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app/src

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY . .

# Expose the port that your Nest.js application listens on (default: 3000)
EXPOSE 3000

# Set the command to run your application
CMD ["npm", "run", "start:prod"]
