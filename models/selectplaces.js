'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SelectPlace extends Model {
    
    static associate(models) {
    }
  };
  SelectPlace.init({
    timestamp: DataTypes.INTEGER,
    polygon: DataTypes.GEOMETRY,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SelectPlace',
    schema:'payments'
  });
  return SelectPlace;
};