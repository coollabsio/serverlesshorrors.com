# Build stage
FROM oven/bun:1 AS builder

WORKDIR /app
COPY package*.json ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# Production stage
FROM nginx:alpine

# Copy nginx configuration if you have any custom settings
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files from builder stage to nginx public directory
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
