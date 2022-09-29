const sequelize = require('sequelize')
const database = new sequelize('sistemaCustoLogistico', 'azureuser', 'databaseTCC027',  { 
                                                                                            dialect: 'mssql', 
                                                                                            host: 'mysqlserver-scl.database.windows.net',
                                                                                            port: 1433
                                                                                        }
)
database.sync()

module.exports = database