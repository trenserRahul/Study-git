
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN apt-get update && apt-get install -y zip

RUN zip -r dist.zip dist

FROM node:18

WORKDIR /app

COPY --from=build /app/dist.zip ./

COPY package*.json ./
RUN npm install --production


EXPOSE 5000

CMD ["node" , "output/dist/index.js"]

