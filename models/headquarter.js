'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Headquarter extends Model {
    static associate(models) {
      Headquarter.belongsTo(models.City);
      Headquarter.belongsToMany(models.Document, { through: models.RequiredDocument});
    }
  };
  Headquarter.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    CountryId: DataTypes.INTEGER,
    RegionId: DataTypes.INTEGER,
    CityId: DataTypes.INTEGER,
    TownId: DataTypes.INTEGER,
    location: DataTypes.GEOMETRY,
    address: DataTypes.STRING,
    phone: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Headquarter',
    schema: "managers",
  });
  return Headquarter;
};