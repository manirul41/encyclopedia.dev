FROM node:20-alpine

RUN addgroup -S app && adduser -S -G app app

USER app

WORKDIR /app/frontend

COPY package*.json ./

USER root

RUN chown -R app:app /app


USER app

RUN npm install

COPY . .

EXPOSE 5173

CMD npm run dev