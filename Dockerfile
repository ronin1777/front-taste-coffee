# # Stage 1: Build
# FROM hub.hamdocker.ir/node:20 as builder
# WORKDIR /app

# # Copy package files
# COPY package.json package-lock.json ./
# # Install dependencies
# RUN npm ci

# # Copy the rest of the application code
# COPY . .
# # Build the application
# RUN npm run build

# # Stage 2: Run
# FROM hub.hamdocker.ir/node:20 as runner
# WORKDIR /app
# ENV NODE_ENV=production

# # Copy built files from the builder stage
# COPY --from=builder /app/ ./

# # Expose the application port
# EXPOSE 3000

# # Start the application
# CMD ["npm", "start"]


FROM hub.hamdocker.ir/node:20 AS base

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to install dependencies first
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install


FROM base AS builder

# Copy the rest of the application files
COPY . .

# Build the application
RUN pnpm run build

FROM hub.hamdocker.ir/node:20 AS runner

# Install pnpm in the runner stage
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy the necessary files from the builder stage for the standalone build
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static .next/static

# Change ownership of the files to the node user
RUN chown -R node:node /app

# Switch to the non-root user
USER node

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

EXPOSE 3000

CMD ["node", "server.js"]

