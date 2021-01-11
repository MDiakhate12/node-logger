FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV LOG_PATH=../logs/node-service

VOLUME ${LOG_PATH} /usr/src/app/${LOG_PATH}

EXPOSE 8080 8081

RUN ["chmod", "+x", "wrapper-process.sh"]

CMD ./wrapper-process.sh