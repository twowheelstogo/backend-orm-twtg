'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alert extends Model {
    static associate(models) {
      Alert.belongsToMany(models.Company, { through: models.CompanyAlert});
    }
  };
  Alert.init({
    description: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Alert',
    schema: "managers",
  });
  return Alert;
};