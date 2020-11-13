'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alert extends Model {
    static associate(models) {
      Alert.belongsTo(models.Company);
    }
  };
  Alert.init({
    name: {
      type:   DataTypes.ENUM,
      values: ['En Tiempo', 'Verificar', 'Por llegar Tarde', 'Tarde']
    },
    time: DataTypes.DECIMAL,
    CompanyId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Alert',
    schema: "managers"
  });
  return Alert;
};