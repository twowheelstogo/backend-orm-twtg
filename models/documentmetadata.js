'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DocumentMetadata extends Model {
    static associate(models) {
      DocumentMetadata.belongsTo(models.Document);
    }
  };
  DocumentMetadata.init({
    DocumentId: DataTypes.NUMBER,
    regex: DataTypes.STRING,
    name: DataTypes.STRING,
    mask: DataTypes.STRING,
    example: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DocumentMetadata',
    schema: "globals",
  });
  return DocumentMetadata;
};