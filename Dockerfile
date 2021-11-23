# stage1 - build react app first 

# set the base image
# This is the application image from which all other subsequent applications run
# Alpine Linux is a security-oriented, lightweight (~5Mb) Linux distribution. 
FROM node:16-alpine3.11 as build

# set working directory
# this is the working folder in the container from which the app will be running from
WORKDIR /usr/app

# add the node_modules folder to $PATH
ENV PATH /app/node_modules/.bin:$PATH


COPY ./package.json /usr/app/

# install  dependencies
RUN yarn --silent

# copy everything to /app directory
COPY . /usr/app

RUN yarn build
RUN yarn global add serve

EXPOSE 5000
CMD ["serve","-s", "build"]
