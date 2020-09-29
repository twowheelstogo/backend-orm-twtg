
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CompanyAlerts', {
      AlertId: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: {
            tableName: 'Alerts',
            schema: 'managers'
          },
          key: 'id'
        },
        comment: ''
      },
      CompanyId: {
        type: Sequelize.STRING,
        allowNull: false,
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
      timeMax: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: ''
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: ''
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: ''
      }
    }, {schema: 'managers',
    comment: ""});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({ tableName: 'CompanyAlerts', schema: 'managers' });
  }
};