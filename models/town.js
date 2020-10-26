'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Town extends Model {
    static associate(models) {
      Town.belongsTo(models.City);
      Town.hasMany(models.TransitedPlace);
      Town.hasMany(models.BranchOffice);
    }
  };
  Town.init({
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    CountryId: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    RegionId: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    CityId: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    gmt: DataTypes.INTEGER,
    zoomMap: DataTypes.INTEGER,
    zipCode: DataTypes.INTEGER,
    locationRef: DataTypes.GEOMETRY
  }, {
    sequelize,
    schema: "globals",
    modelName: 'Town',
  });
  return Town;
};