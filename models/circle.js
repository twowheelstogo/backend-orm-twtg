'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Circle extends Model {
    static associate(models) {
      Circle.belongsToMany(models.BranchOffice, { through: models.branchOfficeCircle });
    }
  };
  Circle.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Circle',
    schema:'payments'
  });
  return Circle;
};