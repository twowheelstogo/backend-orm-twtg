'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Document extends Model {
    static associate(models) {
      Document.belongsTo(models.Country);
      Document.hasMany(models.RequiredDocument);
    }
  };
  Document.init({
    CountryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    schema: "globals",
    sequelize,
    modelName: 'Document',
  });
  return Document;
};