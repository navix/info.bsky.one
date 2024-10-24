# Stage 1: Build
FROM node:22.10 as builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY public/ public/
COPY src/ src/
COPY astro.config.mjs tsconfig.json ./
RUN npm run build

# Stage 2: Serve
FROM nginx:1.27-alpine as runner

COPY --from=builder /app/dist /usr/share/nginx/html
