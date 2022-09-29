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
            console.log('entrou aqui ');
            const fatores = await fatoresModel.create({
                ID: req.body.ID,
                CONDICAO: req.body.CONDICAO,
                VLR_FATURAMENTO: req.body.VLR_FATURAMENTO,
                CONDICAO_PERFATURAMENTO: req.body.CONDICAO_PERFATURAMENTO,
				SCORE_LUCRO: req.body.SCORE_LUCRO
            })
			
            return res.json(fatores)
        } catch (error) {
            return console.error("ERROR CREATE: ", error);
        }
    },

    async update(req, res){
        try {
            const fatores = await fatoresModel.findByPk(req.body.ID)
            if(fatores){
                fatores.CONDICAO = req.body.CONDICAO || fatores.CONDICAO
                fatores.VLR_FATURAMENTO = req.body.VLR_FATURAMENTO || fatores.VLR_FATURAMENTO
                fatores.CONDICAO_PERFATURAMENTO = req.body.CONDICAO_PERFATURAMENTO || fatores.CONDICAO_PERFATURAMENTO
				fatores.SCORE_LUCRO = req.body.SCORE_LUCRO || fatores.SCORE_LUCRO
                await fatores.save()
            }
            return res.json(fatores)
        } catch (error) {
            return console.error("ERROR UPDATE: ", error);
        }
    },

    async getOne(req, res){
        try {
            const fatores = await fatoresModel.findByPk(req.body.ID)
            return res.json(fatores)
        } catch (error) {
            return console.error("ERROR GETONE: ", error);
        }
    },

    async delete(req, res){
        try {
            const fatores = await fatoresModel.findByPk(req.body.ID)
            await fatores.destroy()
            return res.json(fatores)
        } catch (error) {
            return console.error("ERROR DELETE: ", error);
        }
    },
}