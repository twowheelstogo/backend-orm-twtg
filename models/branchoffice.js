'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BranchOffice extends Model {
    static associate(models) {
      BranchOffice.belongsTo(models.Company);
      BranchOffice.belongsToMany(models.Circle, { through: models.branchOfficeCircle });
    }
  };
  BranchOffice.init({
    CompanyId: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    location: DataTypes.GEOMETRY
  }, {
    sequelize,
    modelName: 'BranchOffice',
    schema: "managers",
  });
  return BranchOffice;
};