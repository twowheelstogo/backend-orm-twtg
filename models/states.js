'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {

    static associate(models) {
      State.belongsToMany(models.Company, { through: models.CompanyState});
    }
  };
  State.init({
    description: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'State',
    schema: "managers",
  });
  return State;
};