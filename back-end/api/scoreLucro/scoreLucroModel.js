const sequelize = require('sequelize')
const database = require('../../config/database')
const schema = ""

class tScoreLucro extends sequelize.Model{}

tScoreLucro.init(
    {
        NUMERO_NOTA: {
            type: sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        VALOR_BRUTO: {
            type: sequelize.FLOAT,
            allowNull: false,
        },
        VALOR_FRETE: {
            type: sequelize.FLOAT,
            allowNull: false,
        },
        VALOR_IMPOSTO: {
            type: sequelize.FLOAT,
            allowNull: false,
        },
        VALOR_GASTOVAR: {
            type: sequelize.FLOAT,
            allowNull: false,
        },
        VALOR_CUSTO: {
            type: sequelize.FLOAT,
            allowNull: false,
        },
        VALOR_HOMHORA: {
            type: sequelize.FLOAT,
            allowNull: false,
        },
        VALOR_COMBUSTIVEL: {
            type: sequelize.FLOAT,
            allowNull: false,
        },
        VALOR_PEDAGIO: {
            type: sequelize.FLOAT,
            allowNull: false,
        },
        VALOR_FATURAMENTO: {
            type: sequelize.FLOAT,
            allowNull: false,
        },
        SCORE_CALCULADO: {
            type: sequelize.FLOAT,
            allowNull: false,
        },
        DT_CARGA: {
            type: sequelize.DATE,
            allowNull: false,
        },
    },
    {
        sequelize: database, modelName: 'tScoreLucro', schema
    }
)

module.exports = tScoreLucro