'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('RequiredDocuments', {
      DocumentId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: {
            tableName: 'Documents',
            schema: 'globals'
          },
          key: 'id'
        },
        comment: 'Document required (validate in the country)',
      },
      HeadquarterId: {
        allowNull: false,
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: {
            tableName: 'Headquarters',
            schema: 'managers'
          },
          key: 'id'
        },
        type: Sequelize.UUID,
        comment: 'Headquarter that collected the document'
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Date of creation of the register'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: 'Date of the last modification of the register'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },  {schema: 'managers',
    comment: "Required documents that need to get authorization"});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({tableName: 'RequiredDocuments', schema: 'globals' });
  }
};