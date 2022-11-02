const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CLIENTE', {
    ID_CLIENTE: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IDPERFIL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PERFIL',
        key: 'IDPERFIL'
      }
    },
    RAZAO_SOCIAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CPF_CNPJ: {
      type: DataTypes.DECIMAL(14,0),
      allowNull: true
    },
    PERFIL: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CLIENTE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IFK_Rel_07",
        fields: [
          { name: "IDPERFIL" },
        ]
      },
      {
        name: "PK__CLIENTE__23A34130FCA611DA",
        unique: true,
        fields: [
          { name: "ID_CLIENTE" },
        ]
      },
    ]
  });
};
