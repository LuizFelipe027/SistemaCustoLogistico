const sequelize = require('sequelize')
const database = require('../../config/database')
const schema = ""

class tEntrega extends sequelize.Model{}

tEntrega.init(
    {
        NUMERO_NOTA: {
            type: sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        DT_PREV_ENT: {
            type: sequelize.DATE,
            allowNull: false,
        },
        DT_ENTREGA: {
            type: sequelize.DATE,
            allowNull: false,
        },
        SE_ACORDO: {
            type: sequelize.CHAR,
            allowNull: false
        },
        SE_FALTANTE: {
            type: sequelize.CHAR,
            allowNull: false
        },
        SE_AVARIADO: {
            type: sequelize.CHAR,
            allowNull: false
        },
        SCORE_PRAZO: {
            type: sequelize.CHAR,
            allowNull: false
        }
    },
    {
        sequelize: database, modelName: 'tEntrega', schema
    }
)

module.exports = tEntrega