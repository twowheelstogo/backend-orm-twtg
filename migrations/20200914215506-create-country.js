'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createSchema("globals",
     {comment: "catalogues used in all architecture"});
    await queryInterface.createTable('Countries', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: 'It is a row id'
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Official name defined by ISO 3155'
      },
      code: {
        type: Sequelize.STRING(2),
        allowNull: false,
        unique: true,
        comment: 'It is alpha-2-code defined by ISO 3155'
      },
      locationRef: {
        allowNull: false,
        type: Sequelize.GEOMETRY('POINT'),
        comment: 'it is point reference of the region'
      },
      zoomMap: {
        allowNull: false,
        type: Sequelize.SMALLINT,
        defaultValue: 4,
        comment: 'it is zoom levet to visualizate the country'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: 'Date of creation of the register'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: 'Date of the last modification of the register'
      }
    }, {schema: 'globals',
     comment: "It is a table to show a definition of the country"});
     const dateNow = new Date();
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable( {tableName:'Countries',schema: 'globals'});
    await queryInterface.dropSchema("globals");
  }
};