'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const {cryptoUtil} = require("utils-twtg");
const cryptoRandomString = require('crypto-random-string');

module.exports = (sequelize, DataTypes) => {
  class BranchOffice extends Model {
    static associate(models) {
      BranchOffice.belongsTo(models.Company);
      BranchOffice.belongsTo(models.City);
      BranchOffice.belongsTo(models.Town);
    }
  };
  BranchOffice.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    CompanyId: DataTypes.UUID,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    CountryId: DataTypes.INTEGER,
    RegionId: DataTypes.INTEGER,
    CityId: DataTypes.INTEGER,
    TownId: DataTypes.INTEGER,
    point: DataTypes.GEOMETRY,
    perimeter: DataTypes.GEOMETRY,
    enable:  DataTypes.BOOLEAN,
    publicKey: DataTypes.UUID,
    privateKey: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'BranchOffice',
    schema: "managers",
    hooks: {
      beforeCreate: (branch) => {
        branch.id = uuidv4();
        branch.publicKey = uuidv4();
        let _privateKey  = cryptoRandomString({length: 32, type: 'base64'});
        branch.privateKey = _privateKey;
      }
    }
  });
  return BranchOffice;
};