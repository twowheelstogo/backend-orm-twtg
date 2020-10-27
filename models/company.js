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
      Company.belongsToMany(models.Alert, { through: models.CompanyAlert});
      Company.belongsToMany(models.State, { through: models.CompanyState});
    }
  };
  Company.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    publicKey: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: true
    },
    privateKey: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    uidFirebase: {
      type: DataTypes.VARCHAR,
      allowNull: false,
      defaultValue: true
    },

  }, {
    sequelize,
    modelName: 'Company',
    schema: "managers",
    hooks: {
      beforeCreate: (company) => {
        company.id = uuidv4();
        company.publicKey = uuidv4();
        let _privateKey  = cryptoRandomString({length: 32, type: 'base64'});
        company.privateKey = cryptoUtil.encrypt(_privateKey);
      }
    }
  });
  return Company;
};