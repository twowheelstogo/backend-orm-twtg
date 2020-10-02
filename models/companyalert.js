'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyAlert extends Model {
 
    static associate(models) {
      
    }
  };
  CompanyAlert.init({
    AlertId: DataTypes.STRING,
    CompanyId: DataTypes.STRING,
    timeMax: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CompanyAlert',
    schema: "managers",
  });
  return CompanyAlert;
};