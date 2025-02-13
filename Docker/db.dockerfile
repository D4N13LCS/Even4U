FROM mysql:8.0

COPY ../backend/sql/init.sql /docker-entrypoint-initdb.d/

EXPOSE 3306


