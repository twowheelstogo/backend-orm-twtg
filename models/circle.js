'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Circle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
  });
  return Circle;
};