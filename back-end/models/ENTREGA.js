const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ENTREGA', {
    NUMERO_NOTA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SATISFACAO',
        key: 'NUMERO_NOTA'
      }
    },
    ID_CLIENTE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CLIENTE',
        key: 'ID_CLIENTE'
      }
    },
    ID_PRAZO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PRAZOS',
        key: 'ID_PRAZO'
      }
    },
    DT_PREV_ENT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DT_ENTREGA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    SE_ACORDO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SCORE_PRAZO: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    NUM_SATISFACAO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SE_FALTANTE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SE_AVARIADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    DT_CARGA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
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
  });
};
