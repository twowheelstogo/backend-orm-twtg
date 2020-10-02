'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    await queryInterface.bulkInsert({ tableName: 'Companies', schema: 'managers' }, [
      { id: "AC20200413", name: "agrochina", createdAt: now, updatedAt: now },
      { id: "BK20200327", name: "burger king", createdAt: now, updatedAt: now },
      { id: "CC20200404", name: "chuck e cheese", createdAt: now, updatedAt: now },
      { id: "GL20200517", name: "gelatiamo", createdAt: now, updatedAt: now },
      { id: "LULISGT20200617", name: "lulis gt", createdAt: now, updatedAt: now },
      { id: "MC20200328", name: "mcdonalds", createdAt: now, updatedAt: now },
      { id: "MF20200603", name: "mixtas frankfurt", createdAt: now, updatedAt: now },
      { id: "PB20200103", name: "pollo brujo", createdAt: now, updatedAt: now },
      { id: "PE20200407", name: "panda express", createdAt: now, updatedAt: now }


    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({ tableName: 'Companies', schema: 'managers' }, {}, {});
  }
};
