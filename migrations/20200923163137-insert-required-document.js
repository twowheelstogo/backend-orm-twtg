'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dateNow = new Date();
    await queryInterface.bulkInsert({ tableName: 'RequiredDocuments', schema: 'managers' }, [
      {DocumentId: 1,  HeadquarterId:"e83c1505-0a91-4bbd-8e60-8d7329336511", order: 3, createdAt: dateNow, updatedAt: dateNow},
      {DocumentId: 2,  HeadquarterId:"e83c1505-0a91-4bbd-8e60-8d7329336511", order: 4, createdAt: dateNow, updatedAt: dateNow},
      {DocumentId: 3,  HeadquarterId:"e83c1505-0a91-4bbd-8e60-8d7329336511", order: 6, createdAt: dateNow, updatedAt: dateNow},
      {DocumentId: 4,  HeadquarterId:"e83c1505-0a91-4bbd-8e60-8d7329336511", order: 5, createdAt: dateNow, updatedAt: dateNow},
      {DocumentId: 5,  HeadquarterId:"e83c1505-0a91-4bbd-8e60-8d7329336511", order: 7, createdAt: dateNow, updatedAt: dateNow},
      {DocumentId: 6,  HeadquarterId:"e83c1505-0a91-4bbd-8e60-8d7329336511", order: 1, createdAt: dateNow, updatedAt: dateNow},
      {DocumentId: 7,  HeadquarterId:"e83c1505-0a91-4bbd-8e60-8d7329336511", order: 2, createdAt: dateNow, updatedAt: dateNow}
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({ tableName: 'RequiredDocuments', schema: 'managers' }, {}, {});
  }
};