const sequelize = require('sequelize')
const database = new sequelize('sistemaCustoLogistico', 'azureuser', 'databaseTCC027',  { 
                                                                                            dialect: 'mssql', 
                                                                                            host: 'mysqlserver-scl.database.windows.net',
                                                                                            port: 1433
                                                                                        }
)

async function connect() {
    try {
       await database.sync()
       console.log('DATABASE CONNECTED');
    } catch (error) {
        console.error('ERROR: ', error)
    }
}

connect()

module.exports = database