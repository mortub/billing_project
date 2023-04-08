FROM node:16-alpine

WORKDIR /frontend/src/app

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]

# FROM node:16-alpine as development

# WORKDIR /frontend/src/app

# COPY package*.json .

# RUN npm install

# COPY . .

# RUN npm run build

# FROM node:16-alpine as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /frontend/src/app

# COPY package*.json .

# RUN npm ci --only=production

# COPY --from=development /frontend/src/app/build ./build

# CMD ["npm", "start"]
