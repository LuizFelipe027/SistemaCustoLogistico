const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USUARIOS', {
    IDUSUARIO: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NOME: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    SENHA: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    EMAIL: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'USUARIOS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__USUARIOS__98242AA9EC61CA57",
        unique: true,
        fields: [
          { name: "IDUSUARIO" },
        ]
      },
    ]
  });
};
