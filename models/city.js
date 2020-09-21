'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      City.belongsTo(models.Region);
      City.hasMany(models.Town);
    }
  };
  City.init({
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    CountryId: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    RegionId: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    gmt: DataTypes.NUMBER,
    
    locationRef: DataTypes.GEOMETRY,
    zoomMap: DataTypes.SMALLINT,
    zipCode: DataTypes.INTEGER
  }, {
    sequelize,
    schema: "globals",
    modelName: 'City',
  });
  return City;
};