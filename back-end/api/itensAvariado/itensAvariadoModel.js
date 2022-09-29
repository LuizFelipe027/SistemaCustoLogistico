const sequelize = require('sequelize')
const database = require('../../config/database')
const schema = ""

class tItensAvariado extends sequelize.Model{}

tItensAvariado.init(
    {
        NUMERO_NOTA: {
            type: sequelize.INTEGER,
            allowNull: false
        },
        SE_AVARIADO: {
            type: sequelize.CHAR,
            allowNull: false
        },
        SCORE_AVARIADO: {
            type: sequelize.FLOAT,
            allowNull: false
        }
    },
    {
        sequelize: database, modelName: 'tItensAvariado', schema
    }
)

module.exports = tItensAvariado