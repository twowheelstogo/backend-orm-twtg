'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
    static associate(models) {
      Region.belongsTo(models.Country);
      Region.hasMany(models.City);
    }
  };
  Region.init({
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    CountryId: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    locationRef: DataTypes.GEOMETRY,
    zoomMap: DataTypes.SMALLINT
  }, {
    sequelize,
    schema: "globals",
    modelName: 'Region',
  });
  return Region;
};