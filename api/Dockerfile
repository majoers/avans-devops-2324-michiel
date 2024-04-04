FROM node:18

WORKDIR /app

COPY . /app

ENV PORT=12345

EXPOSE 12345

RUN npm install
RUN npm install -g nodemon

CMD "npm" "run" "dev" 

# Week3 dockerfile
# FROM node:18

# WORKDIR /app

# COPY . /app

# ENV PORT=12345
# ENV HOST=mongodbengine
# ENV MONGO_URL=mongodb://mongodbengine:27017

# EXPOSE 12345

# RUN npm install
# RUN npm install -g nodemon

# CMD "npm" "run" "dev" 
