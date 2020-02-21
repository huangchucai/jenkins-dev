FROM nginx
RUN mkdir /app
WORKDIR /app
COPY ./dist /app
EXPOSE 80
