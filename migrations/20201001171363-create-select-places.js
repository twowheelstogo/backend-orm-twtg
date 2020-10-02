'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SelectPlaces', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      branchOfficeCirclesId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: {
            tableName: 'BranchOfficeCircles',
            schema: 'payments'
          },
          key: 'id'
        },
        comment: ''
      },
      TransitedId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: {
            tableName: 'TransitedPlaces',
            schema: 'payments'
          },
          key: 'id'
        },
        comment: ''
      },
     
      timestamp: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment:''
      },
      polygon: {
        type: Sequelize.GEOMETRY,
        allowNull: false,
        comment:''
      },
      price: {
        type: Sequelize.INTEGER,
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
    }, {schema: 'payments',
      comment: "" });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({ tableName: 'SelectPlaces', schema: 'payments' });
  }
};