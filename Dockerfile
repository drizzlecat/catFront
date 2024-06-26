# Step 1: Use an official Node runtime as a parent image
FROM node:alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json files
COPY package*.json ./

# Step 4: Install dependencies
# RUN npm install
# RUN npm install webpack webpack-cli --save-dev

# Step 5: Copy the rest of your app's source code
# COPY . .

# Step 6: Expose port 3000 to have it mapped by Docker daemon
# EXPOSE 3000

# Step 7: Define the command to run your app
CMD ["npm", "start"]
