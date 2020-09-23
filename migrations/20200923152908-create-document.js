'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Documents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: 'row identification',
      },
      CountryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: {
            tableName: 'Countries',
            schema: 'globals'
          },
          key: 'id'
        },
        comment: 'country identification'
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: 'name identification'
      },
      description: {
        type: Sequelize.STRING,
        comment: 'what is the document?'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: 'Date of creation of the register'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: 'Date of the last modification of the register'
      }
    },  {schema: 'globals',
    comment: "documents that gets the identification of the person or object"});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Documents');
    await queryInterface.dropTable({tableName: 'Documents', schema: 'globals' });
  }
};