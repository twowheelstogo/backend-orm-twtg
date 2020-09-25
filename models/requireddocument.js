'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RequiredDocument extends Model {
    static associate(models) {
    }
  };
  RequiredDocument.init({
    DocumentId: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    HeadquarterId: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    order: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'RequiredDocument',
    schema: "globals"
  });
  return RequiredDocument;
};