# Set up the base image (Node.js image for bun or node)
FROM node:18-alpine AS builder

# Install bash and curl
RUN apk update && apk add --no-cache bash curl

# Set working directory
WORKDIR /app

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Set the path for bun
ENV PATH="/root/.bun/bin:${PATH}"

# Copy the package.json and bun.lock files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install

# Copy project files
COPY . .

# Build the application
RUN bun build-only

# Production stage
FROM nginx:alpine

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
