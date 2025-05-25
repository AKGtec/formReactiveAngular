FROM node:22 AS build
WORKDIR /app
COPY package*.jasn ./
RUN npm install
COPY . .
RUN ng build --prod

FROM nginx:alpine
COPY --from=build /app/dist/tp8 /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]