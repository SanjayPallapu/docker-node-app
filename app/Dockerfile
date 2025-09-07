# ----------------------------
# Stage 1: Builder (workshop)
# ----------------------------
FROM node:18 AS builder
WORKDIR /app

# Copy package files first for caching

COPY package*.json ./

RUN npm cache clean --force
RUN npm install --legacy-peer-deps               # Install all dependencies

# Copy the rest of the code
COPY . .

# Build the app (creates dist folder)
RUN npm run build

# ----------------------------
# Stage 2: Runner (production, clean & small)
# ----------------------------
FROM node:18-slim
WORKDIR /app

# Copy only the built files
COPY --from=builder /app/dist ./dist

# Copy package files for production dependencies
COPY package*.json ./
RUN npm install --production

# Start the app
CMD ["node", "dist/built-app.js"]

