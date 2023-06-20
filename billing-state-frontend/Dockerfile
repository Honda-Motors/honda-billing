# Use the official Node.js 14 image as the base
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY billing-state-frontend/package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the frontend application code to the container
COPY billing-state-frontend ./

# Build the frontend application
RUN npm run build

# Expose the port on which the frontend server will run
EXPOSE 3000

# Start the frontend server
CMD ["npm", "start"]
