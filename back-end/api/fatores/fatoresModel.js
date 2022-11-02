const sequelize = require('sequelize')
const database = require('../../config/database')
const schema = ""

class tFatores extends sequelize.Model{}

tFatores.init(
    {
        ID: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        CONDICAO: {
            type: sequelize.STRING,
            allowNull: false
        },
        VLR_FATURAMENTO: {
            type: sequelize.FLOAT,
            allowNull: false
        },
        CONDICAO_PERFATURAMENTO: {
            type: sequelize.STRING,
            allowNull: false
        },
        SCORE_LUCRO: {
            type: sequelize.FLOAT,
            allowNull: false
        }
    },
    {
        sequelize: database, modelName: 'tFatores', schema
    }
)

module.exports = tFatores