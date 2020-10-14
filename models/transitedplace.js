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
    Perimeter: DataTypes.GEOMETRY("POLYGON"),
    Point: DataTypes.GEOMETRY("POINT")
  }, {
    sequelize,
    modelName: 'TransitedPlace',
  });
  return TransitedPlace;
};