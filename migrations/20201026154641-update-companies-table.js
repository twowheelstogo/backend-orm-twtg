'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Companies', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        allowNull: false,
        comment: "Identification by companies"
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "Name identification of company"
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "description of company"
      },
      enable: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: "State of delete"
      },
      publicKey: {
        allowNull: false,
        type: Sequelize.UUID,
        comment:'public key unique to identified API'
      },
      privateKey: {
        allowNull: false,
        type: Sequelize.TEXT,
        comment:'Key was encripted to access the API'
      },
      uidFirebase: {
        allowNull: true,
        type: Sequelize.STRING,
        comment:'Uid token authentication on firebase'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment:'Creation of register'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment:'Update of register'
      }
    },  {schema: 'managers',
    comment: "manager of companies in the app"});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({ tableName: 'Companies', schema: 'managers' });
  }
};