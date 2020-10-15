'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransitedPlace extends Model {
    static associate(models) {
      TransitedPlace.belongsTo(models.City);
    }
  };
  TransitedPlace.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    RegionId: DataTypes.NUMBER,
    CountryId: DataTypes.NUMBER,
    CityId: DataTypes.NUMBER,
    TownId: DataTypes.NUMBER,
    perimeter: DataTypes.GEOMETRY("POLYGON"),
    point: DataTypes.GEOMETRY("POINT"),
    enable: DataTypes.BOOLEAN
  }, {
    sequelize,
    schema: "business",
    modelName: 'TransitedPlace',
  });
  return TransitedPlace;
};