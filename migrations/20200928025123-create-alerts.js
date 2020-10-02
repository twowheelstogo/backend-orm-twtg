'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Alerts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        comment:''
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        comment:''
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment:''
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment:''
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment:''
      }
    },{schema: 'managers',
    comment: ""});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({ tableName: 'Alerts', schema: 'managers' });
  }
};