"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notifikasi extends Model {
    static associate(models) {
      Notifikasi.belongsTo(models.Daftar_surat, { foreignKey: "surat_id" });
      Notifikasi.belongsTo(models.Departemen, {
        foreignKey: "departemen_id_dari",
      });
      Notifikasi.belongsTo(models.Departemen, {
        foreignKey: "departemen_id_ke",
      });
    }
  }
  Notifikasi.init(
    {
      surat_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Daftar_surat",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      departemen_id_dari: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Departemen",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      departemen_id_ke: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Departemen",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    },
    {
      sequelize,
      modelName: "Notifikasi",
    }
  );
  return Notifikasi;
};
