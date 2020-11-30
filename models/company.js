'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const {cryptoUtil} = require("utils-twtg");
const cryptoRandomString = require('crypto-random-string');

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      Company.hasMany(models.BranchOffice);
      Company.hasMany(models.Alert);
      Company.hasMany(models.Circle);
    }
  };
  Company.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    enable: DataTypes.BOOLEAN,
    publicKey: DataTypes.TEXT,
    privateKey: DataTypes.TEXT,
    uidFirebase: DataTypes.STRING,
    sucMapUrl: DataTypes.TEXT,
    logoUrl: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Company',
    schema: "managers",
    hooks: {
      beforeCreate: (company) => {
        company.id = uuidv4();
        company.publicKey = uuidv4();
        let _privateKey  = cryptoRandomString({length: 32, type: 'alphanumeric'});
        company.privateKey = _privateKey;
      }
    }
  });
  return Company;
};