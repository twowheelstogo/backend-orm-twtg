'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    await queryInterface.bulkInsert({ tableName: 'CompanyAlerts', schema: 'managers' }, [
       {AlertId: 'd725e1e7-4f33-4688-ac32-6640791c62a2', CompanyId: "AC20200413", timeMax: 0,createdAt: now, updatedAt: now },
       {AlertId: '483deda0-6e06-420c-b5c7-bd2d02f926ac', CompanyId: "AC20200413", timeMax: 30,createdAt: now, updatedAt: now },
       {AlertId: 'c50c2e9a-ad91-4a75-a310-bcd43e74d900', CompanyId: "AC20200413", timeMax: 45,createdAt: now, updatedAt: now },
  

       {AlertId: 'd725e1e7-4f33-4688-ac32-6640791c62a2', CompanyId: "BK20200327", timeMax: 0,createdAt: now, updatedAt: now },
       {AlertId: '483deda0-6e06-420c-b5c7-bd2d02f926ac', CompanyId: "BK20200327", timeMax: 30,createdAt: now, updatedAt: now },
       {AlertId: 'c50c2e9a-ad91-4a75-a310-bcd43e74d900', CompanyId: "BK20200327", timeMax: 45,createdAt: now, updatedAt: now },
  
       {AlertId: 'd725e1e7-4f33-4688-ac32-6640791c62a2', CompanyId: "CC20200404", timeMax: 0,createdAt: now, updatedAt: now },
       {AlertId: '483deda0-6e06-420c-b5c7-bd2d02f926ac', CompanyId: "CC20200404", timeMax: 30,createdAt: now, updatedAt: now },
       {AlertId: 'c50c2e9a-ad91-4a75-a310-bcd43e74d900', CompanyId: "CC20200404", timeMax: 45,createdAt: now, updatedAt: now },
  
       {AlertId: 'd725e1e7-4f33-4688-ac32-6640791c62a2', CompanyId: "GL20200517", timeMax: 0,createdAt: now, updatedAt: now },
       {AlertId: '483deda0-6e06-420c-b5c7-bd2d02f926ac', CompanyId: "GL20200517", timeMax: 30,createdAt: now, updatedAt: now },
       {AlertId: 'c50c2e9a-ad91-4a75-a310-bcd43e74d900', CompanyId: "GL20200517", timeMax: 45,createdAt: now, updatedAt: now },
  
       {AlertId: 'd725e1e7-4f33-4688-ac32-6640791c62a2', CompanyId: "LULISGT20200617", timeMax: 0,createdAt: now, updatedAt: now },
       {AlertId: '483deda0-6e06-420c-b5c7-bd2d02f926ac', CompanyId: "LULISGT20200617", timeMax: 30,createdAt: now, updatedAt: now },
       {AlertId: 'c50c2e9a-ad91-4a75-a310-bcd43e74d900', CompanyId: "LULISGT20200617", timeMax: 45,createdAt: now, updatedAt: now },
  
       {AlertId: 'd725e1e7-4f33-4688-ac32-6640791c62a2', CompanyId: "MF20200603", timeMax: 0,createdAt: now, updatedAt: now },
       {AlertId: '483deda0-6e06-420c-b5c7-bd2d02f926ac', CompanyId: "MF20200603", timeMax: 30,createdAt: now, updatedAt: now },
       {AlertId: 'c50c2e9a-ad91-4a75-a310-bcd43e74d900', CompanyId: "MF20200603", timeMax: 45,createdAt: now, updatedAt: now },
  

       {AlertId: 'd725e1e7-4f33-4688-ac32-6640791c62a2', CompanyId: "PB20200103", timeMax: 0,createdAt: now, updatedAt: now },
       {AlertId: '483deda0-6e06-420c-b5c7-bd2d02f926ac', CompanyId: "PB20200103", timeMax: 30,createdAt: now, updatedAt: now },
       {AlertId: 'c50c2e9a-ad91-4a75-a310-bcd43e74d900', CompanyId: "PB20200103", timeMax: 45,createdAt: now, updatedAt: now },
  

       {AlertId: 'd725e1e7-4f33-4688-ac32-6640791c62a2', CompanyId: "PE20200407", timeMax: 0,createdAt: now, updatedAt: now },
       {AlertId: '483deda0-6e06-420c-b5c7-bd2d02f926ac', CompanyId: "PE20200407", timeMax: 30,createdAt: now, updatedAt: now },
       {AlertId: 'c50c2e9a-ad91-4a75-a310-bcd43e74d900', CompanyId: "PE20200407", timeMax: 45,createdAt: now, updatedAt: now },
  
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({ tableName: 'CompanyAlerts', schema: 'managers' }, {}, {});
  }
};
