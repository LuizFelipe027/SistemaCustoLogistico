const integracaoModel = require('./integracaoModel')

module.exports = {
    async List(req, res){
        try {
            const integracao = await integracaoModel.findAll()
            return res.json(integracao)
        } catch (error) {
            return console.error("ERROR: ", error);
        }
    },

    async create(req, res){
        try {
            const integracao = await integracaoModel.create({
              ID: req.body.id,
              LAYOUT: req.body.layout,
              TIPO: req.body.tipo,
              FUNCAO: req.body.funcao,
              STATUS: req.body.status,
              API: req.body.api,
              AUTHORIZATION: req.body.authorization,
              PARAMDIAS: req.body.paramDias,
              QTD_TOTAL: req.body.qtd_total,
              QTD_ATUALIZADO: req.body.qtd_atualizado,
              DT_INICIO: req.body.dt_inicio,
              DT_FIM: req.body.dt_fim,
              TAGS: req.body.tags
            })
            return res.json(integracao)
        } catch (error) {
            return console.error("ERROR CREATE: ", error);
        }
    },

    async update(req, res){
        try {
            const integracao = await integracaoModel.findByPk(req.body.id)
            if(integracao){
                integracao.LAYOUT = req.body.layout || integracao.LAYOUT
                integracao.TIPO = req.body.tipo || integracao.TIPO
                integracao.FUNCAO = req.body.funcao || integracao.FUNCAO
                integracao.STATUS = req.body.status || integracao.STATUS
                integracao.API = req.body.api || integracao.API
                integracao.AUTHORIZATION = req.body.authorization || integracao.AUTHORIZATION
                integracao.PARAMDIAS = req.body.paramDias || integracao.PARAMDIAS
                integracao.QTD_TOTAL = req.body.qtd_total || integracao.QTD_TOTAL
                integracao.QTD_ATUALIZADO = req.body.qtd_atualizado || integracao.QTD_ATUALIZADO
                integracao.DT_INICIO = req.body.dt_inicio || integracao.DT_INICIO
                integracao.DT_FIM = req.body.dt_fim || integracao.DT_FIM
                integracao.TAGS = req.body.tags || integracao.TAGS                
                await integracao.save()
            }
            return res.json(integracao)
        } catch (error) {
            return console.error("ERROR UPDATE: ", error);
        }
    },

    async getOne(req, res){
        try {
            const integracao = await integracaoModel.findByPk(req.body.id)
            return res.json(integracao)
        } catch (error) {
            return console.error("ERROR GETONE: ", error);
        }
    },

    async delete(req, res){
        try {
            const integracao = await integracaoModel.findByPk(req.body.id)
            await integracao.destroy()
            return res.json(integracao)
        } catch (error) {
            return console.error("ERROR DELETE: ", error);
        }
    }
}