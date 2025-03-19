FROM node:23

WORKDIR /src

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run" , "dev"]