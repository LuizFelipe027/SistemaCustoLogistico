const sequelize = require('sequelize')
const database = require('../../config/database')
const schema = ""

class tIntegracao extends sequelize.Model { }

tIntegracao.init(
  {
    ID: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    LAYOUT: {
      type: sequelize.STRING,
      allowNull: false
    },
    TIPO: {
      type: sequelize.STRING,
      allowNull: false
    },
    FUNCAO: {
      type: sequelize.STRING,
      allowNull: false
    },
    STATUS: {
      type: sequelize.STRING,
      allowNull: false
    },
    API: {
      type: sequelize.STRING,
      allowNull: true
    },
    AUTHORIZATION: {
      type: sequelize.STRING,
      allowNull: true
    },
    PARAMDIAS: {
      type: sequelize.INTEGER,
      allowNull: true
    },
    QTD_TOTAL: {
      type: sequelize.INTEGER,
      allowNull: true
    },
    QTD_ATUALIZADO: {
      type: sequelize.INTEGER,
      allowNull: true
    },
    DT_INICIO: {
      type: sequelize.DATE,
      allowNull: true
    },
    DT_FIM: {
      type: sequelize.DATE,
      allowNull: true
    },
    FREQUENCIA: {
      type: sequelize.STRING,
      allowNull: false,
    },
    TAGS: {
      type: sequelize.STRING,
      allowNull: true
    }
  },
  {
    sequelize: database, modelName: 'tIntegracao', schema
  }
)

module.exports = tIntegracao