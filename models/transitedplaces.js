'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transitedPlace extends Model {
    static associate(models) {
      transitedPlace.belongsToMany(models.branchOfficeCircle, { through: models.SelectPlace });
    }
  };
  transitedPlace.init({
    price: DataTypes.INTEGER,
    polygon: DataTypes.GEOMETRY
  }, {
    sequelize,
    modelName: 'transitedPlace',
    schema: "payments",
  });
  return transitedPlace;
};