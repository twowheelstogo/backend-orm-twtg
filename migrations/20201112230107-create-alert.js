'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Alerts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type:   Sequelize.ENUM,
        values: ['En Tiempo', 'Verificar', 'Por llegar Tarde', 'Tarde']
      },
      time: {
        type: Sequelize.DECIMAL
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
    },{schema: 'managers',
    comment: "it is manager alerts"});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({ tableName: 'Alerts', schema: 'managers' });
  }
};