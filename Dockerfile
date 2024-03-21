FROM node:21.6.2-slim AS frontend-build

WORKDIR /app

COPY . .

RUN npm install

# EXPOSE 8081

RUN npm run build

# Stage 2: Serve the built frontend using Nginx
FROM nginx:1.24.0

COPY --from=frontend-build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]