'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    await queryInterface.bulkInsert({ tableName: 'CompanyStates', schema: 'managers' }, [
      { StateId: 1, CompanyId: "AC20200413", createdAt: now, updatedAt: now },
      { StateId: 2, CompanyId: "AC20200413", createdAt: now, updatedAt: now },
      { StateId: 3, CompanyId: "AC20200413", createdAt: now, updatedAt: now },
      { StateId: 4, CompanyId: "AC20200413", createdAt: now, updatedAt: now },
      { StateId: 1, CompanyId: "BK20200327", createdAt: now, updatedAt: now },
      { StateId: 2, CompanyId: "BK20200327", createdAt: now, updatedAt: now },
      { StateId: 3, CompanyId: "BK20200327", createdAt: now, updatedAt: now },
      { StateId: 4, CompanyId: "BK20200327", createdAt: now, updatedAt: now },
      { StateId: 1, CompanyId: "CC20200404", createdAt: now, updatedAt: now },
      { StateId: 2, CompanyId: "CC20200404", createdAt: now, updatedAt: now },
      { StateId: 3, CompanyId: "CC20200404", createdAt: now, updatedAt: now },
      { StateId: 4, CompanyId: "CC20200404", createdAt: now, updatedAt: now },
      { StateId: 1, CompanyId: "GL20200517", createdAt: now, updatedAt: now },
      { StateId: 2, CompanyId: "GL20200517", createdAt: now, updatedAt: now },
      { StateId: 3, CompanyId: "GL20200517", createdAt: now, updatedAt: now },
      { StateId: 4, CompanyId: "GL20200517", createdAt: now, updatedAt: now },
      { StateId: 1, CompanyId: "LULISGT20200617", createdAt: now, updatedAt: now },
      { StateId: 2, CompanyId: "LULISGT20200617", createdAt: now, updatedAt: now },
      { StateId: 3, CompanyId: "LULISGT20200617", createdAt: now, updatedAt: now },
      { StateId: 4, CompanyId: "LULISGT20200617", createdAt: now, updatedAt: now },
      { StateId: 1, CompanyId: "MF20200603", createdAt: now, updatedAt: now },
      { StateId: 2, CompanyId: "MF20200603", createdAt: now, updatedAt: now },
      { StateId: 3, CompanyId: "MF20200603", createdAt: now, updatedAt: now },
      { StateId: 4, CompanyId: "MF20200603", createdAt: now, updatedAt: now },
      { StateId: 1, CompanyId: "PB20200103", createdAt: now, updatedAt: now },
      { StateId: 2, CompanyId: "PB20200103", createdAt: now, updatedAt: now },
      { StateId: 3, CompanyId: "PB20200103", createdAt: now, updatedAt: now },
      { StateId: 4, CompanyId: "PB20200103", createdAt: now, updatedAt: now },
      { StateId: 1, CompanyId: "PE20200407", createdAt: now, updatedAt: now },
      { StateId: 2, CompanyId: "PE20200407", createdAt: now, updatedAt: now },
      { StateId: 3, CompanyId: "PE20200407", createdAt: now, updatedAt: now },
      { StateId: 4, CompanyId: "PE20200407", createdAt: now, updatedAt: now },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({ tableName: 'CompanyStates', schema: 'managers' }, {}, {});
  }
};
