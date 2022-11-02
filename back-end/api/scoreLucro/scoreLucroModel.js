const sequelize = require('sequelize')
const database = require('../../config/database');

class SCORE_LUCRO extends sequelize.Model { }

SCORE_LUCRO.init(
  {
    NUMERO_NOTA: {
      autoIncrement: true,
      type: sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ENTREGA',
        key: 'NUMERO_NOTA'
      }
    },
    ID_FATOR: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'FATORES',
        key: 'ID_FATOR'
      }
    },
    VALOR_BRUTO: {
      type: sequelize.FLOAT,
      allowNull: true
    },
    VALOR_FRETE: {
      type: sequelize.FLOAT,
      allowNull: true
    },
    VALOR_IMPOSTOS: {
      type: sequelize.FLOAT,
      allowNull: true
    },
    VALOR_GASTOVAR: {
      type: sequelize.FLOAT,
      allowNull: true
    },
    VALOR_CUSTO: {
      type: sequelize.FLOAT,
      allowNull: true
    },
    VALOR_HOMHORA: {
      type: sequelize.FLOAT,
      allowNull: true
    },
    VALOR_COMBUSTIVEL: {
      type: sequelize.FLOAT,
      allowNull: true
    },
    VALOR_PEDAGIO: {
      type: sequelize.FLOAT,
      allowNull: true
    },
    VALOR_FATURAMENTO: {
      type: sequelize.FLOAT,
      allowNull: true
    },
    SCORE_CALCULADO: {
      type: sequelize.FLOAT,
      allowNull: true
    },
    DT_CARGA: {
      type: sequelize.DATEONLY,
      allowNull: true
    }
  }, {
  sequelize: database,
  tableName: 'SCORE_LUCRO',
  schema: 'dbo',
  timestamps: false,
  indexes: [
    {
      name: "IFK_Rel_02",
      fields: [
        { name: "NUMERO_NOTA" },
      ]
    },
    {
      name: "IFK_Rel_03",
      fields: [
        { name: "ID_FATOR" },
      ]
    },
    {
      name: "IFK_Rel_08",
      fields: [
        { name: "NUMERO_NOTA" },
      ]
    },
    {
      name: "PK__SCORE_LU__73E70E7F1B81950C",
      unique: true,
      fields: [
        { name: "NUMERO_NOTA" },
      ]
    },
  ]
})

module.exports = SCORE_LUCRO