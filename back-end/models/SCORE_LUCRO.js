const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SCORE_LUCRO', {
    NUMERO_NOTA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ENTREGA',
        key: 'NUMERO_NOTA'
      }
    },
    ID_FATOR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FATORES',
        key: 'ID_FATOR'
      }
    },
    VALOR_BRUTO: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VALOR_FRETE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VALOR_IMPOSTOS: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VALOR_GASTOVAR: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VALOR_CUSTO: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VALOR_HOMHORA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VALOR_COMBUSTIVEL: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VALOR_PEDAGIO: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VALOR_FATURAMENTO: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    SCORE_CALCULADO: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DT_CARGA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
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
  });
};
