const sequelize = require('sequelize')
const database = require('../../config/database')
const schema = ""

class tPrazos extends sequelize.Model{}

tPrazos.init(
    {
        NUMERO_NOTA: {
            type: sequelize.INTEGER,
            allowNull: false
        },
        DT_ENTREGA_EFETIVA: {
            type: sequelize.DATE,
            allowNull: false
        },
        DT_PREV_ENTREGA: {
            type: sequelize.DATE,
            allowNull: false
        },
        SE_ACORDO: {
            type: sequelize.CHAR,
            allowNull: false
        },
        SCORE_PRAZOS: {
            type: sequelize.FLOAT,
            allowNull: false
        }
    },
    {
        sequelize: database, modelName: 'tPrazos', schema
    }
)

module.exports = tPrazos