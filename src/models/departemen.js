"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Departemen extends Model {
    static associate(models) {
      // define association here
    }
  }
  Departemen.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Departemen",
    }
  );
  return Departemen;
};
