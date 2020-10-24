'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createSchema("payments",
     {comment: ""});
    await queryInterface.createTable('TransitedPlaces', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment:''
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment:''
      },
      polygon: {
        type: Sequelize.GEOMETRY,
        allowNull: false,
        comment:''
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull: false,
        comment:''
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull: false,
        comment:''
      }
    
  },{schema: 'payments',
  comment: ""});
},
down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable({ tableName: 'TransitedPlaces', schema: 'payments' });
}
};