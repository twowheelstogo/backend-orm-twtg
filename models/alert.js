'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alert extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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