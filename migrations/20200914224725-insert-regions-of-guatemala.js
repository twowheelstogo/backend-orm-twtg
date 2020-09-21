'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dateNow = new Date();
    await queryInterface.bulkInsert({ tableName: 'Regions', schema: 'globals' }, [
      {CountryId:1, zipCode:"14", id:1, name:"quiché", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [15.428632,-91.4330299]})), code:"QC", createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, zipCode:"21", id:2, name:"jalapa", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6464323,-90.2527326]})), code:"JA", createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, zipCode:"18", id:3, name:"izabal", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [15.5168421,-89.4854181]})), code:"IZ", createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, zipCode:"10", id:4, name:"suchitepéquez", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.375294,-91.661054]})), code:"SU", createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, zipCode:"07", id:5, name:"sololá", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.7084511,-91.4294828]})), code:"SO", createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, zipCode:"02", id:6, name:"el progreso", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.910252,-90.3773379]})), code:"PR", createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, zipCode:"11", id:7, name:"retalhuleu", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.4180853,-92.1202476]})), code:"RE", createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, zipCode:"06", id:8, name:"santa rosa", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.1466336,-90.646773]})), code:"SR", createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, zipCode:"19", id:9, name:"zacapa", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [15.0193704,-89.8064908]})), code:"ZA", createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, zipCode:"12", id:10, name:"san marcos", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.9540245,-92.4645733]})), code:"SM", createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, zipCode:"09", id:11, name:"quetzaltenango", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.8595737,-92.0518815]})), code:"QZ", createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, zipCode:"17", id:12, name:"petén", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [16.8301877,-91.4167294]})), code:"PE", createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, zipCode:"13", id:13, name:"huehuetenango", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [15.3184231,-91.5286821]})), code:"HU", createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, zipCode:"16", id:14, name:"alta verapaz", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [15.5960346,-90.6748221]})),  code:"AV", createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, zipCode:"01", id:15, name:"guatemala", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.5780965,-90.7674236]})), code:"GU", createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, zipCode:"22", id:16, name:"jutiapa", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.1493514,-90.1783269]})), code:"JU", createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, zipCode:"15", id:17, name:"baja verapaz", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [15.1103399,-90.6134056]})), code:"BV", createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, zipCode:"04", id:18, name:"chimaltenango", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6581764,-90.843135]})), code:"CM", createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, zipCode:"03", id:19, name:"sacatepéquez", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.5501166,-90.8866605]})), code:"SA", createdAt: dateNow, updatedAt: dateNow},  
      {CountryId:1, zipCode:"05", id:20, name:"escuintla", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.2998219,-90.8099874]})), code:"ES", createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, zipCode:"08", id:21, name:"totonicapán", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [15.0382501,-91.6455346]})), code:"TO", createdAt: dateNow, updatedAt: dateNow},
      {CountryId:1, zipCode:"20", id:22, name:"chiquimula", locationRef: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.6779651,-89.7058667]})), code:"CQ", createdAt: dateNow, updatedAt: dateNow}
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({ tableName: 'Regions', schema: 'globals' }, {CountryId:1}, {});
  }
};