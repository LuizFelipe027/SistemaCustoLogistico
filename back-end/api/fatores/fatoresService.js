const fatoresModel = require('./fatoresModel')

module.exports = {
    async List(req, res){
        try {
            const fatores = await fatoresModel.findAll()
            return res.json(fatores)
        } catch (error) {
            return console.error("ERROR: ", error);
        }
    },

    async create(req, res){
        try {
            const fatores = await fatoresModel.create({
                ID: req.body.id,
                CONDICAO: req.body.condicao,
                VLR_FATURAMENTO: req.body.vlr_faturamento,
                CONDICAO_PERFATURAMENTO: req.body.condicao_perfaturamento,
				SCORE_LUCRO: req.body.score_lucro
            })
			
            return res.json(fatores)
        } catch (error) {
            return console.error("ERROR CREATE: ", error);
        }
    },

    async update(req, res){
        try {
            const fatores = await fatoresModel.findByPk(req.params.ID)
            if(fatores){
                fatores.CONDICAO = req.body.condicao || fatores.CONDICAO
                fatores.VLR_FATURAMENTO = req.body.vlr_faturamento || fatores.VLR_FATURAMENTO
                fatores.CONDICAO_PERFATURAMENTO = req.body.condicao_perfaturamento || fatores.CONDICAO_PERFATURAMENTO
				fatores.SCORE_LUCRO = req.body.score_lucro || fatores.SCORE_LUCRO
                await fatores.save()
            }
            return res.json(fatores)
        } catch (error) {
            return console.error("ERROR UPDATE: ", error);
        }
    },

    async getOne(req, res){
        try {
            const fatores = await fatoresModel.findByPk(req.params.ID)
            return res.json(fatores)
        } catch (error) {
            return console.error("ERROR GETONE: ", error);
        }
    },

    async delete(req, res){
        try {
            const fatores = await fatoresModel.findByPk(req.params.ID)
            await fatores.destroy()
            return res.json(fatores)
        } catch (error) {
            return console.error("ERROR DELETE: ", error);
        }
    },
}