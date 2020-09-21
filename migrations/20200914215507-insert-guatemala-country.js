'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dateNow = new Date();
    await queryInterface.bulkInsert({ tableName: 'Countries', schema: 'globals' }, [
      {id: 1, name: "guatemala", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [15.7166729,-92.4797312]})), code: "GT", createdAt: dateNow, updatedAt: dateNow}
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({ tableName: 'Countries', schema: 'globals' }, {id:1}, {});
  }
};