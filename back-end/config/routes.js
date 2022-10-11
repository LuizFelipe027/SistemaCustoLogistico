const express = require('express')

//module.exports = function (server) {
    //API rotas
    const router = express.Router()
    //server.use('/api', router)

    const usuarioService = require('../api/usuario/usuarioService')
    router.get('/usuario/List', usuarioService.List)
    router.get('/usuario/getOne', usuarioService.getOne)
    router.post('/usuario/create', usuarioService.create)
    router.post('/usuario/update', usuarioService.update)
    router.post('/usuario/delete', usuarioService.delete)

    const entregaService = require('../api/entrega/entregaService')
    router.get('/entrega/List', entregaService.List)
    router.get('/entrega/getOne', entregaService.getOne)
    router.post('/entrega/create', entregaService.create)
    router.post('/entrega/update', entregaService.update)
    router.post('/entrega/delete', entregaService.delete)

    const scoreLucroService = require('../api/scoreLucro/scoreLucroService')
    router.get('/scorelucro/List', scoreLucroService.List)
    router.get('/scorelucro/getOne', scoreLucroService.getOne)
    router.post('/scorelucro/create', scoreLucroService.create)
    router.post('/scorelucro/update', scoreLucroService.update)
    router.post('/scorelucro/delete', scoreLucroService.delete)

    const fatoresService = require('../api/fatores/fatoresService')
    router.get('/scorelucro/List', fatoresService.List)
    router.get('/scorelucro/getOne', fatoresService.getOne)
    router.post('/scorelucro/create', fatoresService.create)
    router.post('/scorelucro/update', fatoresService.update)
    router.post('/scorelucro/delete', fatoresService.delete)

    const satisfacaoService = require('../api/satisfacao/satisfacaoService')
    router.get('/satisfacao/List', satisfacaoService.List)
    router.get('/satisfacao/getOne', satisfacaoService.getOne)
    router.post('/satisfacao/create', satisfacaoService.create)
    router.post('/satisfacao/update', satisfacaoService.update)
    router.post('/satisfacao/delete', satisfacaoService.delete)

    const itensFaltandoService = require('../api/itensFaltando/itensFaltandoService')
    router.get('/itensfaltando/List', itensFaltandoService.List)
    router.get('/itensfaltando/getOne', itensFaltandoService.getOne)
    router.post('/itensfaltando/create', itensFaltandoService.create)
    router.post('/itensfaltando/update', itensFaltandoService.update)
    router.post('/itensfaltando/delete', itensFaltandoService.delete)

    const itensAvariadoService = require('../api/itensAvariado/itensAvariadoService')
    router.get('/itensavariado/List', itensAvariadoService.List)
    router.get('/itensavariado/getOne', itensAvariadoService.getOne)
    router.post('/itensavariado/create', itensAvariadoService.create)
    router.post('/itensavariado/update', itensAvariadoService.update)
    router.post('/itensavariado/delete', itensAvariadoService.delete)

    const prazosService = require('../api/prazos/prazosService')
    router.get('/prazos/List', prazosService.List)
    router.get('/prazos/getOne', prazosService.getOne)
    router.post('/prazos/create', prazosService.create)
    router.post('/prazos/update', prazosService.update)
    router.post('/prazos/delete', prazosService.delete)

    const automacaoService = require('../api/automacao/automacaoService')
    router.get('/automacao/List', automacaoService.List)
    router.get('/automacao/getOne', automacaoService.getOne)
    router.post('/automacao/create', automacaoService.create)
    router.post('/automacao/update', automacaoService.update)
    router.post('/automacao/delete', automacaoService.delete)

    const integracaoService = require('../api/integracao/integracaoService')
    router.get('/integracao/List', integracaoService.List)
    router.get('/integracao/getOne', integracaoService.getOne)
    router.post('/integracao/create', integracaoService.create)
    router.post('/integracao/update', integracaoService.update)
    router.post('/integracao/delete', integracaoService.delete)

//}
//}

module.exports = router