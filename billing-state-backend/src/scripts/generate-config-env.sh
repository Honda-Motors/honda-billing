#!/bin/bash

echo "Generating config.env file..."

# Set MongoDB URLs
echo "MONGO_URL=mongodb://127.0.0.1:27017/honda" >> ./src/config/config.env
echo "MONGO_DEV_URL=mongodb://127.0.0.1:27017/honda" >> ./src/config/config.env

# Set server port
echo "PORT=5000" >> ./src/config/config.env

# Set Node.js environment
echo "NODE_ENV=development" >> ./src/config/config.env

# Set JWT configurations
echo "JWT_EXPIRE=30d" >> ./src/config/config.env
echo "JWT_SECRET=thisissupposetobesecret9369784" >> ./src/config/config.env
echo "JWT_COOKIE_EXPIRE=30" >> ./src/config/config.env

# Set Cloudinary configurations
echo "CLOUD_KEY=" >> ./src/config/config.env
echo "CLOUD_NAME=" >> ./src/config/config.env
echo "CLOUD_SECRET_KEY=" >> ./src/config/config.env

echo "config.env file generated successfully in ./src/config/ directory!"
