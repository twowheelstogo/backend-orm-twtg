sh -c "/wait" 
npx sequelize db:migrate --url "postgres://${SEQUELIZE_USERNAME}:${SEQUELIZE_PASSWORD}@${SEQUELIZE_HOST}:${SEQUELIZE_PORT}/${SEQUELIZE_DATABASE}"
