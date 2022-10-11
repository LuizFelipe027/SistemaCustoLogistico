const ItensFaltandoModel = require('./ItensFaltandoModel')

module.exports = {
    async List(req, res){
        try {
            const ItensFaltando = await ItensFaltandoModel.findAll()
            return res.json(ItensFaltando)
        } catch (error) {
            return console.error("ERROR: ", error);
        }
    },

    async create(req, res){
        try {
             
            const ItensFaltando = await ItensFaltandoModel.create({
                NUMERO_NOTA: req.body.NUMERO_NOTA,
                SE_FALTANTE: req.body.SE_FALTANTE,
                SCORE_FALTANTE: req.body.SCORE_FALTANTE
            })
			
            return res.json(ItensFaltando)
        } catch (error) {
            return console.error("ERROR CREATE: ", error);
        }
    },

    async update(req, res){
        try {
            const ItensFaltando = await ItensFaltandoModel.findByPk(req.body.NUMERO_NOTA)
            if(ItensFaltando){
                ItensFaltando.SE_FALTANTE = req.body.SE_FALTANTE || ItensFaltando.SE_FALTANTE
                ItensFaltando.SCORE_FALTANTE = req.body.SCORE_FALTANTE || ItensFaltando.SCORE_FALTANTE
                await ItensFaltando.save()
            }
            return res.json(ItensFaltando)
        } catch (error) {
            return console.error("ERROR UPDATE: ", error);
        }
    },

    async getOne(req, res){
        try {
            const ItensFaltando = await ItensFaltandoModel.findByPk(req.body.NUMERO_NOTA)
            return res.json(ItensFaltando)
        } catch (error) {
            return console.error("ERROR GETONE: ", error);
        }
    },

    async delete(req, res){
        try {
            const ItensFaltando = await ItensFaltandoModel.findByPk(req.body.NUMERO_NOTA)
            await ItensFaltando.destroy()
            return res.json(ItensFaltando)
        } catch (error) {
            return console.error("ERROR DELETE: ", error);
        }
    }
}