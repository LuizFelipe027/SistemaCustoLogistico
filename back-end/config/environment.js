//porta para o serviço apirest
const server = {
    port : 5000
  }
  //variaves para conexão do banco de dados
  const db = {
      type: 'mssql',
      layout: 'sankhya_custo_logistico',
      server: 'mysqlserver-scl.database.windows.net',
      database: 'sistemaCustoLogistico',
      user: 'azureuser',
      password: 'databaseTCC027'
  }
  
  module.exports = {server,db}