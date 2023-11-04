FROM node:lts
RUN apt update && \
    apt install ffmpeg -y
WORKDIR /app
COPY ./ ./
RUN npm install && npm run build && npm test && rm -rf src test
RUN npm install pm2 -g
EXPOSE 3000
CMD ["pm2", "dist/src/bin/www.js"]
