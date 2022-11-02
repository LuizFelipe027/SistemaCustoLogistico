const sequelize = require('sequelize')
const database = require('../../config/database');

class FATORES extends sequelize.Model { }

FATORES.init(
  {
    ID_FATOR: {
      autoIncrement: true,
      type: sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LUCRO_ZERO: {
      type: sequelize.STRING,
      allowNull: true
    },
    VLR_FAT_INICIAL: {
      type: sequelize.FLOAT,
      allowNull: true
    },
    VLR_FAT_FINAL: {
      type: sequelize.FLOAT,
      allowNull: true
    },
    SCORE: {
      type: sequelize.FLOAT,
      allowNull: true
    },
    LIMITE: {
      type: sequelize.FLOAT,
      allowNull: true
    },
    SINAL: {
      type: sequelize.STRING,
      allowNull: true
    }
  }, {
  sequelize: database,
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

module.exports = FATORES