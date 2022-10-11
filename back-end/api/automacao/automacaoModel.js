const sequelize = require('sequelize')
const database = require('../../config/database')
const schema = ""

class tAutomacao extends sequelize.Model { }

tAutomacao.init(
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
        PROX_EXECUCAO: {
            type: sequelize.DATE,
            allowNull: false,
        },
        INTERVALO: {
            type: sequelize.INTEGER,
            allowNull: true
        },
        TIPO_INTERVALO: {
            type: sequelize.STRING,
            allowNull: false
        },
        STATUS: {
            type: sequelize.STRING,
            allowNull: false
        },
        INTEGRACOES: {
            type: sequelize.STRING,
            allowNull: false,
        },
        TAGS: {
            type: sequelize.STRING,
            allowNull: true
        },
        DT_INICIO: {
            type: sequelize.DATE,
            allowNull: true
        },
        DT_FIM: {
            type: sequelize.DATE,
            allowNull: true
        }
    },
    {
        sequelize: database, modelName: 'tAutomacao', schema
    }
)

module.exports = tAutomacao

