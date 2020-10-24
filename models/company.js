'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      Company.hasMany(models.BranchOffice);
      Company.belongsToMany(models.Alert, { through: models.CompanyAlert });
      Company.belongsToMany(models.State, { through: models.CompanyState });
    }
  };
  Company.init({
    name: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Company',
    schema: "managers",

  });
  return Company;
};