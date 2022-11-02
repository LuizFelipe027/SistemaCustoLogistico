const SatisfacaoModel = require('./satisfacaoModel')

module.exports = {
    async List(req, res){
        try {
            const Satisfacao = await SatisfacaoModel.findAll()
            return res.json(Satisfacao)
        } catch (error) {
            return console.error("ERROR: ", error);
        }
    },

    async create(req, res){
        try {
             
            const Satisfacao = await SatisfacaoModel.create({
                NUMERO_NOTA: req.body.NUMERO_NOTA,
                NUMERO_SATISFACAO: req.body.NUMERO_SATISFACAO,
                SCORE_SATISFACAO: req.body.SCORE_SATISFACAO
            })
			
            return res.json(Satisfacao)
        } catch (error) {
            return console.error("ERROR CREATE: ", error);
        }
    },

    async update(req, res){
        try {
            const Satisfacao = await SatisfacaoModel.findByPk(req.body.NUMERO_NOTA)
            if(Satisfacao){
                Satisfacao.NUMERO_SATISFACAO = req.body.NUMERO_SATISFACAO || Satisfacao.NUMERO_SATISFACAO
                Satisfacao.SCORE_SATISFACAO = req.body.SCORE_SATISFACAO || Satisfacao.SCORE_SATISFACAO
                await Satisfacao.save()
            }
            return res.json(Satisfacao)
        } catch (error) {
            return console.error("ERROR UPDATE: ", error);
        }
    },

    async getOne(req, res){
        try {
            const Satisfacao = await SatisfacaoModel.findByPk(req.body.NUMERO_NOTA)
            return res.json(Satisfacao)
        } catch (error) {
            return console.error("ERROR GETONE: ", error);
        }
    },

    async delete(req, res){
        try {
            const Satisfacao = await SatisfacaoModel.findByPk(req.body.NUMERO_NOTA)
            await Satisfacao.destroy()
            return res.json(Satisfacao)
        } catch (error) {
            return console.error("ERROR DELETE: ", error);
        }
    }
}