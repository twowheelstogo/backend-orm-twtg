'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class branchOfficeCircle extends Model {
    
    static associate(models) {
      branchOfficeCircle.belongsToMany(models.transitedPlace, { through: models.SelectPlace });
      
    }
  };
  branchOfficeCircle.init({
    timestamp: DataTypes.INTEGER,
    polygon: DataTypes.GEOMETRY,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'branchOfficeCircle',
    schema: "payments",
  });
  return branchOfficeCircle;
};