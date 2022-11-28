FROM node:14-slim
# Create app directory
WORKDIR /usr/src

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Install app dependencies
COPY ./package.json ./

# Copy app source code
ADD . .

RUN yarn install
ENTRYPOINT ["/entrypoint.sh"]

#Expose port and start application
EXPOSE 3001
CMD ["npm","run","dev"]