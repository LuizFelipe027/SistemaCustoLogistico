const sequelize = require('sequelize')
const database = require('../../config/database')

class ENTREGAS extends sequelize.Model { }

ENTREGAS.init(
  {
    NUMERO_NOTA: {
      autoIncrement: true,
      type: sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SATISFACAO',
        key: 'NUMERO_NOTA'
      }
    },
    ID_CLIENTE: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'CLIENTE',
        key: 'ID_CLIENTE'
      }
    },
    ID_PRAZO: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'PRAZOS',
        key: 'ID_PRAZO'
      }
    },
    DT_PREV_ENT: {
      type: sequelize.DATEONLY,
      allowNull: true
    },
    DT_ENTREGA: {
      type: sequelize.DATEONLY,
      allowNull: true
    },
    SE_ACORDO: {
      type: sequelize.CHAR,
      allowNull: true
    },
    SCORE_PRAZO: {
      type: sequelize.FLOAT,
      allowNull: true
    },
    NUM_SATISFACAO: {
      type: sequelize.INTEGER,
      allowNull: true
    },
    SE_FALTANTE: {
      type: sequelize.CHAR,
      allowNull: true
    },
    SE_AVARIADO: {
      type: sequelize.CHAR,
      allowNull: true
    },
    DT_CARGA: {
      type: sequelize.DATEONLY,
      allowNull: true
    }
  }, {
  sequelize: database,
  tableName: 'ENTREGA',
  schema: 'dbo',
  timestamps: false,
  indexes: [
    {
      name: "IFK_Rel_09",
      fields: [
        { name: "ID_PRAZO" },
      ]
    },
    {
      name: "IFK_Rel_12",
      fields: [
        { name: "NUMERO_NOTA" },
      ]
    },
    {
      name: "IFK_Rel_14",
      fields: [
        { name: "ID_CLIENTE" },
      ]
    },
    {
      name: "PK__ENTREGA__73E70E7F33D9C392",
      unique: true,
      fields: [
        { name: "NUMERO_NOTA" },
      ]
    },
  ]
})

module.exports = ENTREGAS