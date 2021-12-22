FROM node
# FROM node:16

WORKDIR /app

COPY . .

RUN yarn 

RUN yarn build

EXPOSE 3333

CMD yarn server