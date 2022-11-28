FROM node:14-slim

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY ./package.json ./
COPY ./package-lock.json ./

ADD . .

RUN npm install
ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 4000

CMD [ "npm", "run", "start" ]
