# -------- Builder --------
FROM node:20-alpine AS builder
WORKDIR /app

# Install deps (with dev deps) and build
COPY package.json package-lock.json ./
RUN npm ci --include=dev
COPY . .
RUN npm run build

# -------- Runner --------
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# default; override at runtime with -e PORT=xxxx or .env
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

# Non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001 -G nodejs

# Install only prod deps for runtime
COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm ci --omit=dev

# Copy build artifacts and public assets
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

USER nextjs
EXPOSE ${PORT}
CMD ["npm", "run", "start"]
