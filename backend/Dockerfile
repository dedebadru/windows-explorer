# Set up the base image (Node.js image for bun or node)
FROM node:18-alpine AS builder

# Install bash and curl
RUN apk update && apk add --no-cache bash curl git openssl

# Set working directory
WORKDIR /app

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Set the path for bun
ENV PATH="/root/.bun/bin:${PATH}"

# Copy the package.json and bun.lock files
COPY package.json bun.lock ./

# Install dependencies using Bun
RUN bun install

# Copy the source code into the container
COPY . .

# Generate prisma
RUN bun prisma generate

# Build the application (optional, depends on your project setup)
RUN bun build \
  --compile \
  --minify-whitespace \
  --minify-syntax \
  --target bun \
  --outfile server \
  ./src/index.ts


# Set environment variables (Optional, set any environment variables here)
# ENV NODE_ENV=production

# Expose the port your app will run on (Adjust this port as necessary)
EXPOSE 80

# Run the application (use your start command, adjust as needed)
CMD ["./server"]