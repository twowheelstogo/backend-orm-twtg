'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Circles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      distance: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      enable: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      CompanyId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: {
            tableName: 'Companies',
            schema: 'managers'
          },
          key: 'id'
        },
        comment: 'Reference to country',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {schema: 'managers',
    comment: "it is manager to get the rate"});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({ tableName: 'Circles', schema: 'managers' });
  }
};