'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Regions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: 'It is a row id'
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Official name region defined by ISO 3166-1'
      },
      code: {
        type: Sequelize.STRING(2),
        allowNull: false,
        comment: 'Iso code defined by ISO 3166-1'
      },
      zipCode: {
        type: Sequelize.STRING(),
        allowNull: false,
        comment: 'Unique code for the mail in the region'
      },
      CountryId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: {
            tableName: 'Countries',
            schema: 'globals'
          },
          key: 'id'
        },
        comment: 'Reference to country',
        allowNull: false
      },
      zoomMap: {
        allowNull: false,
        type: Sequelize.SMALLINT,
        defaultValue: 8,
        comment: 'it is zoom levet to visualizate the region'
      },
      CountryId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: {
            tableName: 'Countries',
            schema: 'globals'
          },
          key: 'id'
        },
        comment: 'Reference to country',
        allowNull: false
      },
      locationRef: {
        allowNull: false,
        type: Sequelize.GEOMETRY('POINT'),
        comment: 'it is point reference of the region'
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
    },  {schema: 'globals',
    comment: "It is a table to show a definition of the regions of each country"});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable( {tableName:'Regions',schema: 'globals'});
  }
};