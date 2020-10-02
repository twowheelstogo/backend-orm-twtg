'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate(models) {
      Country.hasMany(models.Region);
      Country.hasMany(models.Document);
    }
  };

  Country.init({
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    locationRef: DataTypes.GEOMETRY,
    zoomMap: DataTypes.SMALLINT
  }, {
    sequelize,
    schema: "globals",
    modelName: 'Country',
  });

  return Country;
};