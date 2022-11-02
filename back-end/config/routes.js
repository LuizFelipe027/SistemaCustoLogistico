const express = require('express')

//module.exports = function (server) {
    //API rotas
    const router = express.Router()
    //server.use('/api', router)

    const usuarioService = require('../api/usuario/usuarioService')
    router.get('/usuario/List', usuarioService.List)
    router.get('/usuario/getOne/:ID', usuarioService.getOne)
    router.post('/usuario/create', usuarioService.create)
    router.put('/usuario/update/:ID', usuarioService.update)
    router.delete('/usuario/delete/:ID', usuarioService.delete)

    const entregaService = require('../api/entrega/entregaService')
    router.get('/entrega/List', entregaService.List)
    router.get('/entrega/getOne/:ID', entregaService.getOne)
    router.post('/entrega/create', entregaService.create)
    router.put('/entrega/update/:ID', entregaService.update)
    router.delete('/entrega/delete/:ID', entregaService.delete)

    const scoreLucroService = require('../api/scoreLucro/scoreLucroService')
    router.get('/scorelucro/List', scoreLucroService.List)
    router.get('/scorelucro/getOne/:ID', scoreLucroService.getOne)
    router.post('/scorelucro/create', scoreLucroService.create)
    router.put('/scorelucro/update/:ID', scoreLucroService.update)
    router.delete('/scorelucro/delete/:ID', scoreLucroService.delete)

    const fatoresService = require('../api/fatores/fatoresService')
    router.get('/fatores/List', fatoresService.List)
    router.get('/fatores/getOne/:ID', fatoresService.getOne)
    router.post('/fatores/create', fatoresService.create)
    router.put('/fatores/update/:ID', fatoresService.update)
    router.delete('/fatores/delete/:ID', fatoresService.delete)

    const satisfacaoService = require('../api/satisfacao/satisfacaoService')
    router.get('/satisfacao/List', satisfacaoService.List)
    router.get('/satisfacao/getOne/:ID', satisfacaoService.getOne)
    router.post('/satisfacao/create', satisfacaoService.create)
    router.put('/satisfacao/update/:ID', satisfacaoService.update)
    router.delete('/satisfacao/delete/:ID', satisfacaoService.delete)

    const prazosService = require('../api/prazos/prazosService')
    router.get('/prazos/List', prazosService.List)
    router.get('/prazos/getOne/:ID', prazosService.getOne)
    // router.post('/prazos/create', prazosService.create)
    // router.put('/prazos/update/:ID', prazosService.update)
    // router.delete('/prazos/delete/:ID', prazosService.delete)

    const automacaoService = require('../api/automacao/automacaoService')
    router.get('/automacao/List', automacaoService.List)
    router.get('/automacao/getOne/:ID', automacaoService.getOne)
    router.post('/automacao/create', automacaoService.create)
    router.put('/automacao/update/:ID', automacaoService.update)
    router.delete('/automacao/delete/:ID', automacaoService.delete)

    const integracaoService = require('../api/integracao/integracaoService')
    router.get('/integracao/List', integracaoService.List)
    router.get('/integracao/getOne/:ID', integracaoService.getOne)
    router.post('/integracao/create', integracaoService.create)
    router.put('/integracao/update/:ID', integracaoService.update)
    router.delete('/integracao/delete/:ID', integracaoService.delete)

    const clienteService = require('../api/cliente/clienteService')
    router.get('/cliente/List', clienteService.List)
    router.get('/cliente/getOne/:ID', clienteService.getOne)
    // router.post('/cliente/create', clienteService.create)
    // router.put('/cliente/update/:ID', clienteService.update)
    // router.delete('/cliente/delete/:ID', clienteService.delete)

    const perfilService = require('../api/perfil/perfilService')
    router.get('/perfil/List', perfilService.List)
    router.get('/perfil/getOne/:ID', perfilService.getOne)
    // router.post('/perfil/create', perfilService.create)
    // router.put('/perfil/update/:ID', perfilService.update)
    // router.delete('/perfil/delete/:ID', perfilService.delete)
//}
//}

module.exports = router