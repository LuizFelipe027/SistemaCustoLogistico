const sequelize = require('sequelize')
const database = require('../../config/database')

class CLIENTE extends sequelize.Model{}

  CLIENTE.init(
   {
    ID_CLIENTE: {
      autoIncrement: true,
      type: sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IDPERFIL: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'PERFIL',
        key: 'IDPERFIL'
      }
    },
    RAZAO_SOCIAL: {
      type: sequelize.STRING,
      allowNull: true
    },
    CPF_CNPJ: {
      type: sequelize.DECIMAL(14,0),
      allowNull: true
    },
    // PERFIL: {
    //   type: sequelize.STRING,
    //   allowNull: true
    // }
  }, {
    sequelize: database,
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

  module.exports = CLIENTE