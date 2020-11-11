'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn({ tableName: 'Companies', schema: 'managers' },'sucMapUrl', Sequelize.STRING);
    await queryInterface.addColumn({ tableName: 'Companies', schema: 'managers' },'logoUrl', Sequelize.STRING);
    //await queryInterface.addColumn({ tableName: 'BranchOffices', schema: 'managers' },'qrBase64', Sequelize.STRING);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn({ tableName: 'Companies', schema: 'managers' },'sucMapUrl');
    await queryInterface.removeColumn({ tableName: 'Companies', schema: 'managers' },'logoUrl');
  }
};