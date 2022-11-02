const sequelize = require('sequelize')
const database = require('../../config/database');

class PERFIL extends sequelize.Model { }

PERFIL.init(
  {
    IDPERFIL: {
      autoIncrement: true,
      type: sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PERFIL: {
      type: sequelize.STRING(200),
      allowNull: true
    }
  }, {
  sequelize: database,
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

module.exports = PERFIL