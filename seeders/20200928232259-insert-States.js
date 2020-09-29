'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    await queryInterface.bulkInsert({ tableName: 'States', schema: 'managers' }, [
       {id: 1, description: "Status Entrega", name:'Nuevo',createdAt: now, updatedAt: now },
       {id: 2, description: "Status Entrega", name:'En ruta',createdAt: now, updatedAt: now },
       {id: 3, description: "Status Entrega", name:'Entregado',createdAt: now, updatedAt: now },
       {id: 4, description: "Status Entrega", name:'Cancelado',createdAt: now, updatedAt: now },
      

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({ tableName: 'States', schema: 'managers' }, {}, {});
  }
};

