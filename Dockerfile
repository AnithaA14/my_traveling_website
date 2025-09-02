# Use Node.js official image
FROM node:18-alpine

# Create working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project jojf
COPY . .

# Expose port
EXPOSE 3000

# Start server
CMD ["node", "server.js"]
