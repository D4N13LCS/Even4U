FROM mysql:8

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=eventos_db
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=admin

COPY sql /docker-entrypoint-initdb.d/

RUN chmod -R 777 /docker-entrypoint-initdb.d

EXPOSE 3306


