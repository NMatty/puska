# Use Node.js LTS
FROM node:18

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Expose port (same as app's port)
EXPOSE 8080

# Start the app
CMD ["npm", "start"]