FROM mdillon/postgis

COPY docker-entrypoint-initdb.d /docker-entrypoint-initdb.d
RUN chmod +r /docker-entrypoint-initdb.d


npx sequelize-cli db:migrate:undo
npx sequelize-cli db:migrate:undo