FROM node:14
COPY . /app
WORKDIR /app
RUN npm install
RUN npm install nodemon -g
# I'm using nodemon for dev, but in prod this would just be node:
CMD ["nodemon", "app.js"]