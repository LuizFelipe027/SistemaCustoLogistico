const sequelize = require('sequelize')
const database = require('../../config/database')
const schema = ""

class tSatisfacao extends sequelize.Model{}

tSatisfacao.init(
    {
        NUMERO_NOTA: {
            type: sequelize.INTEGER,
            allowNull: false
        },
        NUMERO_SATISFACAO: {
            type: sequelize.INTEGER,
            allowNull: false
        },
        SCORE_SATISFACAO: {
            type: sequelize.FLOAT,
            allowNull: false
        }
    },
    {
        sequelize: database, modelName: 'tSatisfacao', schema
    }
)

module.exports = tSatisfacao