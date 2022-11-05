const scoreLucroModel = require('./scoreLucroModel')

module.exports = {
    async List(req, res){
        try {
            const scoreLucro = await scoreLucroModel.findAll()
            return res.json(scoreLucro)
        } catch (error) {
            return console.error("ERROR: ", error);
        }
    },

    async create(req, res){
        try {
             
            const scoreLucro = await scoreLucroModel.create({
                NUMERO_NOTA: req.body.NUMERO_NOTA,
                VALOR_BRUTO: req.body.VALOR_BRUTO,
                VALOR_FRETE: req.body.VALOR_FRETE,
                VALOR_IMPOSTO: req.body.VALOR_IMPOSTO,
				VALOR_GASTOVAR: req.body.VALOR_GASTOVAR,
				VALOR_HOMHORA: req.body.VALOR_HOMHORA,
				VALOR_COMBUSTIVEL: req.body.VALOR_COMBUSTIVEL,
				VALOR_PEDAGIO: req.body.VALOR_PEDAGIO,
				VALOR_FATURAMENTO: req.body.VALOR_FATURAMENTO,
				SCORE_CALCULADO: req.body.SCORE_CALCULADO,
				DT_CARGA: req.body.DT_CARGA
            })
			
            return res.json(scoreLucro)
        } catch (error) {
            return console.error("ERROR CREATE: ", error);
        }
    },

    async update(req, res){
        try {
            const scoreLucro = await scoreLucroModel.findByPk(req.body.NUMERO_NOTA)
            if(scoreLucro){
                scoreLucro.VALOR_BRUTO = req.body.VALOR_BRUTO || scoreLucro.VALOR_BRUTO
                scoreLucro.VALOR_FRETE = req.body.VALOR_FRETE || scoreLucro.VALOR_FRETE
                scoreLucro.VALOR_IMPOSTO = req.body.VALOR_IMPOSTO || scoreLucro.VALOR_IMPOSTO
				scoreLucro.VALOR_GASTOVAR = req.body.VALOR_GASTOVAR || scoreLucro.VALOR_GASTOVAR
				scoreLucro.VALOR_HOMHORA = req.body.VALOR_HOMHORA || scoreLucro.VALOR_HOMHORA
				scoreLucro.VALOR_COMBUSTIVEL = req.body.VALOR_COMBUSTIVEL || scoreLucro.VALOR_COMBUSTIVEL
				scoreLucro.VALOR_PEDAGIO = req.body.VALOR_PEDAGIO || scoreLucro.VALOR_PEDAGIO
				scoreLucro.VALOR_FATURAMENTO = req.body.VALOR_FATURAMENTO || scoreLucro.VALOR_FATURAMENTO
				scoreLucro.SCORE_CALCULADO = req.body.SCORE_CALCULADO || scoreLucro.SCORE_CALCULADO
				scoreLucro.DT_CARGA = req.body.DT_CARGA || scoreLucro.DT_CARGA
                await scoreLucro.save()
            }
            return res.json(scoreLucro)
        } catch (error) {
            return console.error("ERROR UPDATE: ", error);
        }
    },

    async getOne(req, res){
        try {
            const scoreLucro = await scoreLucroModel.findByPk(req.params.ID)
            return res.json(scoreLucro)
        } catch (error) {
            return console.error("ERROR GETONE: ", error);
        }
    },

    async delete(req, res){
        try {
            const scoreLucro = await scoreLucroModel.findByPk(req.body.NUMERO_NOTA)
            await scoreLucro.destroy()
            return res.json(scoreLucro)
        } catch (error) {
            return console.error("ERROR DELETE: ", error);
        }
    }
}