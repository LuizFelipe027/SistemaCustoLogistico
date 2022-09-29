const PrazosModel = require('./PrazosModel')

module.exports = {
    async List(req, res){
        try {
            const Prazos = await PrazosModel.findAll()
            return res.json(Prazos)
        } catch (error) {
            return console.error("ERROR: ", error);
        }
    },

    async create(req, res){
        try {
            console.log('entrou aqui ');
            const Prazos = await PrazosModel.create({
                NUMERO_NOTA: req.body.NUMERO_NOTA,
                DT_ENTREGA_EFETIVA: req.body.DT_ENTREGA_EFETIVA,
                DT_PREV_ENTREGA: req.body.DT_PREV_ENTREGA,
				SE_ACORDO: req.body.SE_ACORDO,
				SCORE_PRAZOS: req.body.SCORE_PRAZOS
            })
			
            return res.json(Prazos)
        } catch (error) {
            return console.error("ERROR CREATE: ", error);
        }
    },

    async update(req, res){
        try {
            const Prazos = await PrazosModel.findByPk(req.body.NUMERO_NOTA)
            if(Prazos){
                Prazos.DT_ENTREGA_EFETIVA = req.body.DT_ENTREGA_EFETIVA || Prazos.DT_ENTREGA_EFETIVA
                Prazos.DT_PREV_ENTREGA = req.body.DT_PREV_ENTREGA || Prazos.DT_PREV_ENTREGA
				Prazos.SE_ACORDO = req.body.SE_ACORDO || Prazos.SE_ACORDO
				Prazos.SCORE_PRAZOS = req.body.SCORE_PRAZOS || Prazos.SCORE_PRAZOS
                await Prazos.save()
            }
            return res.json(Prazos)
        } catch (error) {
            return console.error("ERROR UPDATE: ", error);
        }
    },

    async getOne(req, res){
        try {
            const Prazos = await PrazosModel.findByPk(req.body.NUMERO_NOTA)
            return res.json(Prazos)
        } catch (error) {
            return console.error("ERROR GETONE: ", error);
        }
    },

    async delete(req, res){
        try {
            const Prazos = await PrazosModel.findByPk(req.body.NUMERO_NOTA)
            await Prazos.destroy()
            return res.json(Prazos)
        } catch (error) {
            return console.error("ERROR DELETE: ", error);
        }
    }
}