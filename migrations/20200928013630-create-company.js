'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Companies', {
      id: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        comment: ""
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: ""
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: ""
      }
    },  {schema: 'managers',
    comment: ""});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({ tableName: 'Companies', schema: 'managers' });
  }
};