const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FATORES', {
    ID_FATOR: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LUCRO_ZERO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VLR_FAT_INICIAL: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VLR_FAT_FINAL: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    SCORE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    LIMITE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    SINAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FATORES',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__FATORES__6DFFAAE6CE4CD7C8",
        unique: true,
        fields: [
          { name: "ID_FATOR" },
        ]
      },
    ]
  });
};
