const express = require('express')
const auth = require('./auth')

//module.exports = function (server) {

    //ROTAS ABERTAS
    
    //API rotas
    const openApi = express.Router()
    //server.use('/oapi', openApi)

    const authService = require('../api/usuario/authService')
    openApi.post('/login', authService.login)
    openApi.post('/signup', authService.signup)
    openApi.post('/validateToken', authService.validateToken)

    //API Routes
    const protectedApi = express.Router()
    //server.use('/api', protectedApi)

    protectedApi.use(auth)

    //Rotas de API
    const usuarioService = require('../api/usuario/usuarioService')
    protectedApi.get('/usuario/List', usuarioService.List)
    protectedApi.get('/usuario/getOne/:ID', usuarioService.getOne)
    protectedApi.post('/usuario/create', usuarioService.create)
    protectedApi.put('/usuario/update/:ID', usuarioService.update)
    protectedApi.delete('/usuario/delete/:ID', usuarioService.delete)

    const entregaService = require('../api/entrega/entregaService')
    protectedApi.get('/entrega/List', entregaService.List)
    protectedApi.get('/entrega/getOne/:ID', entregaService.getOne)
    protectedApi.post('/entrega/create', entregaService.create)
    protectedApi.put('/entrega/update/:ID', entregaService.update)
    protectedApi.delete('/entrega/delete/:ID', entregaService.delete)

    const scoreLucroService = require('../api/scoreLucro/scoreLucroService')
    protectedApi.get('/scorelucro/List', scoreLucroService.List)
    protectedApi.get('/scorelucro/getOne/:ID', scoreLucroService.getOne)
    protectedApi.post('/scorelucro/create', scoreLucroService.create)
    protectedApi.put('/scorelucro/update/:ID', scoreLucroService.update)
    protectedApi.delete('/scorelucro/delete/:ID', scoreLucroService.delete)

    const fatoresService = require('../api/fatores/fatoresService')
    protectedApi.get('/scorelucro/List', fatoresService.List)
    protectedApi.get('/scorelucro/getOne/:ID', fatoresService.getOne)
    protectedApi.post('/scorelucro/create', fatoresService.create)
    protectedApi.put('/scorelucro/update/:ID', fatoresService.update)
    protectedApi.delete('/scorelucro/delete/:ID', fatoresService.delete)

    const satisfacaoService = require('../api/satisfacao/satisfacaoService')
    protectedApi.get('/satisfacao/List', satisfacaoService.List)
    protectedApi.get('/satisfacao/getOne/:ID', satisfacaoService.getOne)
    protectedApi.post('/satisfacao/create', satisfacaoService.create)
    protectedApi.put('/satisfacao/update/:ID', satisfacaoService.update)
    protectedApi.delete('/satisfacao/delete/:ID', satisfacaoService.delete)

    const prazosService = require('../api/prazos/prazosService')
    protectedApi.get('/prazos/List', prazosService.List)
    protectedApi.get('/prazos/getOne/:ID', prazosService.getOne)
    protectedApi.post('/prazos/create', prazosService.create)
    protectedApi.put('/prazos/update/:ID', prazosService.update)
    protectedApi.delete('/prazos/delete/:ID', prazosService.delete)

    const automacaoService = require('../api/automacao/automacaoService')
    protectedApi.get('/automacao/List', automacaoService.List)
    protectedApi.get('/automacao/getOne/:ID', automacaoService.getOne)
    protectedApi.post('/automacao/create', automacaoService.create)
    protectedApi.put('/automacao/update/:ID', automacaoService.update)
    protectedApi.delete('/automacao/delete/:ID', automacaoService.delete)

    const integracaoService = require('../api/integracao/integracaoService')
    protectedApi.get('/integracao/List', integracaoService.List)
    protectedApi.get('/integracao/getOne/:ID', integracaoService.getOne)
    protectedApi.post('/integracao/create', integracaoService.create)
    protectedApi.put('/integracao/update/:ID', integracaoService.update)
    protectedApi.delete('/integracao/delete/:ID', integracaoService.delete)

//}


module.exports = {openApi, protectedApi}