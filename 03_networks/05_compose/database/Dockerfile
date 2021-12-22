FROM postgres:12-alpine

ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_USER=postgres

COPY ./init.sql /docker-entrypoint-initdb.d/
