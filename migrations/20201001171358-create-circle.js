'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Circles', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        comment:''
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
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
  await queryInterface.dropTable({ tableName: 'Circles', schema: 'payments' });
}
};