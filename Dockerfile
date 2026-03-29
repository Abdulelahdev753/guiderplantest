# Stage 1: Build frontend (Next.js static export)
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

# Stage 2: Build backend (TypeScript)
FROM node:20-alpine AS backend-builder
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm ci
COPY backend/ ./
RUN npm run build

# Stage 3: Production image
FROM node:20-alpine
WORKDIR /app

# Copy backend compiled output and production dependencies
COPY --from=backend-builder /app/backend/dist ./backend/dist
COPY --from=backend-builder /app/backend/package*.json ./backend/
WORKDIR /app/backend
RUN npm ci --omit=dev

# Copy frontend static output
COPY --from=frontend-builder /app/frontend/out /app/frontend/out

WORKDIR /app/backend
ENV PORT=3000
EXPOSE 3000
CMD ["node", "dist/index.js"]
