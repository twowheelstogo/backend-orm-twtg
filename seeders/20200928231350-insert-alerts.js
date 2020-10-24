'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    await queryInterface.bulkInsert({ tableName: 'Alerts', schema: 'managers' }, [

      { id: "d725e1e7-4f33-4688-ac32-6640791c62a2", description: "Alertas", name: "En tiempo", createdAt: now, updatedAt: now },
      { id: "483deda0-6e06-420c-b5c7-bd2d02f926ac", description: "Alertas", name: "Verificar", createdAt: now, updatedAt: now },
      { id: "c50c2e9a-ad91-4a75-a310-bcd43e74d900", description: "Alertas", name: "Por llegar tarde", createdAt: now, updatedAt: now },
        
    ]);
  },
   
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({ tableName: 'Alerts', schema: 'managers' }, {}, {});
  }
};
