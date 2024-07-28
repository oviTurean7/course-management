ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine AS build

ENV NODE_ENV=production
ENV HOME=/home/customuser

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV=production
ENV HOME=/home/customuser

WORKDIR /app

RUN apk add --no-cache shadow
RUN addgroup -S customgroup && adduser -S customuser -G customgroup
RUN chown -R customuser:customgroup /app

USER customuser

COPY --from=build /app .

ENTRYPOINT ["npm", "start"]
