'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Headquarters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      coordinates: {
        type: Sequelize.GEOMETRY
      },
      CountryId: {
        type: Sequelize.NUMBER
      },
      RegionId: {
        type: Sequelize.NUMBER
      },
      CityId: {
        type: Sequelize.NUMBER
      },
      address: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Headquarters');
  }
};