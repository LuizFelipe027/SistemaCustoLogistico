const sequelize = require('sequelize')
const database = require('../../config/database')

class USUARIOS extends sequelize.Model { }

USUARIOS.init(
  {
    IDUSUARIO: {
      autoIncrement: true,
      type: sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NOME: {
      type: sequelize.STRING,
      allowNull: false
    },
    SENHA: {
      type: sequelize.STRING,
      allowNull: false
    },
    EMAIL: {
      type: sequelize.STRING,
      allowNull: false
    }
  }, {
  sequelize: database,
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
})


module.exports = USUARIOS