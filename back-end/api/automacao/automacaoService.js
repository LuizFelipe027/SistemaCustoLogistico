const automacaoModel = require('./automacaoModel')

module.exports = {
  async List(req, res) {
    try {
      const automacao = await automacaoModel.findAll()
      return res.json(automacao)
    } catch (error) {
      return console.error("ERROR: ", error);
    }
  },

  async create(req, res) {
    try {
      const automacao = await automacaoModel.create({
        ID: req.body.id,
        NOME: req.body.nome,
        PROX_EXECUCAO: req.body.prox_execucao,
        INTERVALO: req.body.intervalo,
        TIPO_INTERVALO: req.body.tipo_intervalo,
        STATUS: req.body.status,
        INTEGRACOES: req.body.integracoes,
        TAGS: req.body.tags,
        DT_INICIO: req.body.dt_inicio,
        DT_FIM: req.body.dt_fim
      })
      return res.json(automacao)
    } catch (error) {
      return console.error("ERROR CREATE: ", error);
    }
  },

  async update(req, res) {
    try {
      const automacao = await automacaoModel.findByPk(req.params.ID)
      if (automacao) {
        automacao.NOME = req.body.nome || automacao.NOME
        automacao.PROX_EXECUCAO = req.body.prox_execucao || automacao.PROX_EXECUCAO
        automacao.INTERVALO = req.body.intervalo || automacao.INTERVALO
        automacao.TIPO_INTERVALO = req.body.tipo_intervalo || automacao.TIPO_INTERVALO
        automacao.STATUS = req.body.status || automacao.STATUS
        automacao.INTEGRACOES = req.body.integracoes || automacao.INTEGRACOES
        automacao.TAGS = req.body.tags || automacao.TAGS
        automacao.DT_INICIO = req.body.dt_inicio || automacao.DT_INICIO
        automacao.DT_FIM = req.body.dt_fim || automacao.DT_FIM
        await automacao.save()
      }
      return res.json(automacao)
    } catch (error) {
      return console.error("ERROR UPDATE: ", error);
    }
  },

  async getOne(req, res) {
    try {
      const automacao = await automacaoModel.findByPk(req.params.ID)
      return res.json(automacao)
    } catch (error) {
      return console.error("ERROR GETONE: ", error);
    }
  },

  async delete(req, res) {
    try {
      const automacao = await automacaoModel.findByPk(req.params.ID)
      await automacao.destroy()
      return res.json(automacao)
    } catch (error) {
      return console.error("ERROR DELETE: ", error);
    }
  }
}