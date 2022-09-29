const sequelize = require('sequelize')
const database = require('../../config/database')
const schema = ""

class tUsuario extends sequelize.Model{}

tUsuario.init(
    {
        ID: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        NOME: {
            type: sequelize.STRING,
            allowNull: false,
        },
        SENHA: {
            type: sequelize.STRING,
            allowNull: false,
        },
        EMAIL: {
            type: sequelize.STRING,
            allowNull: false
        }
    },
    {
        sequelize: database, modelName: 'tUsuario', schema
    }
)

module.exports = tUsuario