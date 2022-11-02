const sequelize = require('sequelize')
const database = require('../../config/database');

class PRAZOS extends sequelize.Model { }

PRAZOS.init(
  {
    ID_PRAZO: {
      autoIncrement: true,
      type: sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DT_PREV_ENTREGA: {
      type: sequelize.DATEONLY,
      allowNull: true
    },
    SE_ACORDO: {
      type: sequelize.CHAR,
      allowNull: true
    },
    SCORE_PRAZOS: {
      type: sequelize.FLOAT,
      allowNull: true
    }
  }, {
  sequelize: database,
  tableName: 'PRAZOS',
  schema: 'dbo',
  timestamps: false,
  indexes: [
    {
      name: "PK__PRAZOS__7D7C0667086A8D6F",
      unique: true,
      fields: [
        { name: "ID_PRAZO" },
      ]
    },
  ]
})

module.exports = PRAZOS