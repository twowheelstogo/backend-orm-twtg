'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({ tableName: 'BranchOffices', schema: 'managers' });
    await queryInterface.dropTable({ tableName: 'CompanyAlerts', schema: 'managers' });
    await queryInterface.dropTable({ tableName: 'Alerts', schema: 'managers' });
    await queryInterface.dropTable({ tableName: 'CompanyStates', schema: 'managers' });
    await queryInterface.dropTable({ tableName: 'States', schema: 'managers' });
    
    await queryInterface.dropTable({ tableName: 'Companies', schema: 'managers' });
    
  },
  down: async (queryInterface, Sequelize) => {
    //await queryInterface.removeColumn({ tableName: 'BranchOffices', schema: 'managers' }, "perimeter");
  }
};