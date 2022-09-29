const ItensAvariadosModel = require('./itensAvariadoModel')

module.exports = {
    async List(req, res){
        try {
            const ItensAvariados = await ItensAvariadosModel.findAll()
            return res.json(ItensAvariados)
        } catch (error) {
            return console.error("ERROR: ", error);
        }
    },

    async create(req, res){
        try {
            console.log('entrou aqui ');
            const ItensAvariados = await ItensAvariadosModel.create({
                NUMERO_NOTA: req.body.NUMERO_NOTA,
                SE_AVARIADO: req.body.SE_AVARIADO,
                SCORE_AVARIADO: req.body.SCORE_AVARIADO
            })
			
            return res.json(ItensAvariados)
        } catch (error) {
            return console.error("ERROR CREATE: ", error);
        }
    },

    async update(req, res){
        try {
            const ItensAvariados = await ItensAvariadosModel.findByPk(req.body.NUMERO_NOTA)
            if(ItensAvariados){
                ItensAvariados.SE_AVARIADO = req.body.SE_AVARIADO || ItensAvariados.SE_AVARIADO
                ItensAvariados.SCORE_AVARIADO = req.body.SCORE_AVARIADO || ItensAvariados.SCORE_AVARIADO
                await ItensAvariados.save()
            }
            return res.json(ItensAvariados)
        } catch (error) {
            return console.error("ERROR UPDATE: ", error);
        }
    },

    async getOne(req, res){
        try {
            const ItensAvariados = await ItensAvariadosModel.findByPk(req.body.NUMERO_NOTA)
            return res.json(ItensAvariados)
        } catch (error) {
            return console.error("ERROR GETONE: ", error);
        }
    },

    async delete(req, res){
        try {
            const ItensAvariados = await ItensAvariadosModel.findByPk(req.body.NUMERO_NOTA)
            await ItensAvariados.destroy()
            return res.json(ItensAvariados)
        } catch (error) {
            return console.error("ERROR DELETE: ", error);
        }
    }
}