'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Circle extends Model {
    static associate(models) {
      Circle.belongsTo(models.Company);
    }
  };
  Circle.init({
    order: DataTypes.NUMBER,
    distance: DataTypes.DECIMAL,
    enable: DataTypes.BOOLEAN,
    price: DataTypes.DECIMAL,
    CompanyId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Circle',
    schema: "managers"
  });
  return Circle;
};