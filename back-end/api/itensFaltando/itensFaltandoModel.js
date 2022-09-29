const sequelize = require('sequelize')
const database = require('../../config/database')
const schema = ""

class tItensFaltando extends sequelize.Model{}

tItensFaltando.init(
    {
        NUMERO_NOTA: {
            type: sequelize.INTEGER,
            allowNull: false
        },
        SE_FALTANTE: {
            type: sequelize.CHAR,
            allowNull: false
        },
        SCORE_FALTANTE: {
            type: sequelize.FLOAT,
            allowNull: false
        }
    },
    {
        sequelize: database, modelName: 'tItensFaltando', schema
    }
)

module.exports = tItensFaltando