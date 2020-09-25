'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DocumentMetadata', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: 'Identification of document',
      },
      DocumentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        comment: 'ID Reference',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: {
            tableName: 'Documents',
            schema: 'globals'
          },
          key: 'id'
        }
      },
      regex: {
        allowNull: false,
        comment: 'Structure must be respect',
        type: Sequelize.STRING
      },
      key: {
        allowNull: false,
        comment: 'key to identified the metadata (it must be unique for each document)',
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        comment: 'name of metadata',
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        comment: 'description of key',
        type: Sequelize.STRING
      },
      mask: {
        allowNull: false,
        comment: 'Structure of the mask',
        type: Sequelize.STRING
      },
      hint: {
        allowNull: false,
        comment: 'example to user',
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: 'Date of the last modification of the register'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: 'date updated'
      }
    },  {schema: 'globals',
    comment: "Describe the metadata"});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({tableName: 'DocumentMetadata', schema: 'globals' });
  }
};