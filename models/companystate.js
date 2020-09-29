'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyState extends Model {

    static associate(models) {
    }
  };
  CompanyState.init({
    StateId: DataTypes.INTEGER,
    CompanyId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'CompanyState',
    schema: "managers",
  });
  return CompanyState;
};