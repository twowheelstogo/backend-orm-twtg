'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dateNow = new Date();
    await queryInterface.bulkInsert({ tableName: 'Towns', schema: 'globals' }, [
      {CountryId:1, RegionId:15, CityId:1, id: 1, zipCode:"01001", name:"zona 1", gmt:-6,  locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6355959,-90.5250225]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:1, id: 2, zipCode:"01002", name:"zona 2", gmt:-6,  locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6658998,-90.5245974]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:1, id: 3, zipCode:"01003", name:"zona 3", gmt:-6,  locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6369549,-90.5452731]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:1, id: 4, zipCode:"01004", name:"zona 4", gmt:-6,  locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6369549,-90.5452731]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:1, id: 5, zipCode:"01005", name:"zona 5", gmt:-6,  locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.619793,-90.5225136]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:1, id: 6, zipCode:"01006", name:"zona 6", gmt:-6,  locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6753589,-90.5198581]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:1, id: 7, zipCode:"01007", name:"zona 7", gmt:-6,  locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6459714,-90.5807903]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:1, id: 8, zipCode:"01008", name:"zona 8", gmt:-6,  locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6155806,-90.5364176]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:1, id: 9, zipCode:"01009", name:"zona 9", gmt:-6,  locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6051714,-90.5311427]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:1, id: 10, zipCode:"01010", name:"zona 10", gmt:-6,  locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.5944682,-90.5175379]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:1, id: 11, zipCode:"01011", name:"zona 11", gmt:-6,  locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6022891,-90.5932492]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:1, id: 12, zipCode:"01012", name:"zona 12", gmt:-6,  locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.5744608,-90.5866481]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:1, id: 13, zipCode:"01013", name:"zona 13", gmt:-6,  locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.5782467,-90.5643478]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:1, id: 14, zipCode:"01014", name:"zona 14", gmt:-6,  locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.5805888,-90.5187589]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:1, id: 15, zipCode:"01015", name:"zona 15", gmt:-6,  locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.599011,-90.5105598]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:1, id: 16, zipCode:"01016", name:"zona 16", gmt:-6,  locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6116463,-90.5056842]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:1, id: 17, zipCode:"01017", name:"zona 17", gmt:-6,  locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6412827,-90.47253]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:1, id: 18, zipCode:"01018", name:"zona 18", gmt:-6,  locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6698721,-90.4707972]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:1, id: 19, zipCode:"01019", name:"zona 19", gmt:-6,  locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6565511,-90.5873663]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:1, id: 20, zipCode:"01021", name:"zona 21", gmt:-6,  locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.5517465,-90.5651387]})), createdAt: dateNow, updatedAt: dateNow},

      {CountryId:1, RegionId:15, CityId:6, id: 1, name:"zona 1", gmt:-6, locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6274838,-90.6195152]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:6, id: 2, name:"zona 2", gmt:-6, locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6282634,-90.5972582]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:6, id: 3, name:"zona 3", gmt:-6, locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.641197,-90.5898071]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:6, id: 4, name:"zona 4", gmt:-6, locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.657994,-90.5744087]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:6, id: 5, name:"zona 5", gmt:-6, locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6656569,-90.5832625]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:6, id: 6, name:"zona 6", gmt:-6, locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6699739,-90.6029715]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:6, id: 7, name:"zona 7", gmt:-6, locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6459043,-90.6068659]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:6, id: 8, name:"zona 8", gmt:-6, locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.5970011,-90.60943]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:6, id: 9, name:"zona 9", gmt:-6, locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6009418,-90.6370785]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:6, id: 10, name:"zona 10", gmt:-6, locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6110171,-90.6043861]})), createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, RegionId:15, CityId:6, id: 11, name:"zona 11", gmt:-6, locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6808719,-90.5500026]})), createdAt: dateNow, updatedAt: dateNow},
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({ tableName: 'Towns', schema: 'globals' }, {CountryId:1}, {});
  }
};