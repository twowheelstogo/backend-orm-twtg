'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dateNow = new Date();
    await queryInterface.bulkInsert({ tableName: 'Headquarters', schema: 'managers' }, [
      {id: "e83c1505-0a91-4bbd-8e60-8d7329336511",  CountryId:1, RegionId:15, CityId:1, TownId:14, location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.5870221,-90.5159167]})), address:"5 avenida 5-55 edificio europlaza torre 4 nivel 6 oficina 604 zona 14", phone: "22997600",  createdAt: dateNow, updatedAt: dateNow}
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({ tableName: 'Headquarters', schema: 'managers' }, {id:"e83c1505-0a91-4bbd-8e60-8d7329336511"}, {});
  }
};