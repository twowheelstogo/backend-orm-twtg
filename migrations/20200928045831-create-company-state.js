'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CompanyStates', {
      StateId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: {
            tableName: 'States',
            schema: 'managers'
          },
          key: 'id'
        },
        comment: ''
      },
      CompanyId: {
        type: Sequelize.STRING,
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: {
            tableName: 'Companies',
            schema: 'managers'
          },
          key: 'id'
        },
        comment: ''
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },{schema: 'managers',
    comment: ""});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({ tableName: 'CompanyStates', schema: 'managers' });
  }
};