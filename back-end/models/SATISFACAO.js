const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SATISFACAO', {
    NUMERO_NOTA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NUMERO_SATISFACAO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SCORE_SATISFACAO: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
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
  });
};
