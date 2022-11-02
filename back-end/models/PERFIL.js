const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PERFIL', {
    IDPERFIL: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PERFIL: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PERFIL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__PERFIL__8D428C3F86949325",
        unique: true,
        fields: [
          { name: "IDPERFIL" },
        ]
      },
    ]
  });
};
