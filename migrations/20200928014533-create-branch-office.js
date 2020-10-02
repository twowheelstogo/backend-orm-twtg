'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BranchOffices', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      CompanyId: {
        type: Sequelize.STRING,
        allowNull: false,
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
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: ''
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: ''
      },
      location: {
        type: Sequelize.GEOMETRY('POINT'),
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
    },  {schema: 'managers',
    comment: ""});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({ tableName: 'BranchOffices', schema: 'managers' });
  }
};