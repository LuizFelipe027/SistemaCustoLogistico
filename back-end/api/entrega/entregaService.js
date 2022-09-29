const entregaModel = require('./entregaModel')

module.exports = {
    async List(req, res){
        try {
            const entregas = await entregaModel.findAll()
            return res.json(entregas)
        } catch (error) {
            return console.error("ERROR: ", error);
        }
    },

    async create(req, res){
        try {
            console.log('entrou aqui ');
            const entregas = await entregaModel.create({
                NUMERO_NOTA: req.body.NUMERO_NOTA,
                DT_PREV_ENT: req.body.DT_PREV_ENT,
                DT_ENTREGA: req.body.DT_ENTREGA,
                SE_ACORDO: req.body.SE_ACORDO,
				SE_FALTANTE: req.body.SE_FALTANTE,
				SE_AVARIADO: req.body.SE_AVARIADO,
				SCORE_PRAZO: req.body.SCORE_PRAZO
            })
            return res.json(entregas)
        } catch (error) {
            return console.error("ERROR CREATE: ", error);
        }
    },

    async update(req, res){
        try {
            const entrega = await entregaModel.findByPk(req.body.NUMERO_NOTA)
            if(entrega){
                entrega.DT_PREV_ENT = req.body.DT_PREV_ENT || entrega.DT_PREV_ENT
                entrega.DT_ENTREGA = req.body.DT_ENTREGA || entrega.DT_ENTREGA
                entrega.SE_ACORDO = req.body.SE_ACORDO || entrega.SE_ACORDO
				entrega.SE_FALTANTE = req.body.SE_FALTANTE || entrega.SE_FALTANTE
				entrega.SE_AVARIADO = req.body.SE_AVARIADO || entrega.SE_AVARIADO
				entrega.SCORE_PRAZO = req.body.SCORE_PRAZO || entrega.SCORE_PRAZO
                await entrega.save()
            }
            return res.json(entrega)
        } catch (error) {
            return console.error("ERROR UPDATE: ", error);
        }
    },

    async getOne(req, res){
        try {
            const entrega = await entregaModel.findByPk(req.body.NUMERO_NOTA)
            return res.json(entrega)
        } catch (error) {
            return console.error("ERROR GETONE: ", error);
        }
    },

    async delete(req, res){
        try {
            const entrega = await entregaModel.findByPk(req.body.NUMERO_NOTA)
            await entrega.destroy()
            return res.json(entrega)
        } catch (error) {
            return console.error("ERROR DELETE: ", error);
        }
    }
}