const sequelize = require('sequelize')
const database = require('../../config/database');

class SATISFACAO extends sequelize.Model { }

SATISFACAO.init(
  {
    NUMERO_NOTA: {
      type: sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NUMERO_SATISFACAO: {
      type: sequelize.INTEGER,
      allowNull: true
    },
    SCORE_SATISFACAO: {
      type: sequelize.FLOAT,
      allowNull: true
    }
  }, {
  sequelize: database,
  tableName: 'SATISFACAO',
  schema: 'dbo',
  timestamps: false,
  indexes: [
    {
      name: "PK__SATISFAC__73E70E7F0A1491F2",
      unique: true,
      fields: [
        { name: "NUMERO_NOTA" },
      ]
    },
  ]
})

module.exports = SATISFACAO