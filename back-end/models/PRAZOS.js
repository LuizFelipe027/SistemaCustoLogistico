const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PRAZOS', {
    ID_PRAZO: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DT_PREV_ENTREGA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    SE_ACORDO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SCORE_PRAZOS: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
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
  });
};
