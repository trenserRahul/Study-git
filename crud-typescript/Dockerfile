
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
COPY tsconfig.json tsconfig.json

RUN npm run build

# //Step 2

FROM node:18

WORKDIR /app
 
COPY --from=build /app/package.json .
COPY --from=build /app/node_modules node_modules/
COPY --from=build /app/dist dist/

EXPOSE 5000

CMD ["node" , "dist/index.js"]

