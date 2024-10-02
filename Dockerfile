FROM node:18.15-alpine
WORKDIR /usr/src
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build
COPY hack ./
ENV HOST=0.0.0.0 PORT=3000 NODE_ENV=production
EXPOSE $PORT
RUN chmod +x ./docker-entrypoint.sh
CMD ["/bin/sh", "docker-entrypoint.sh"]
