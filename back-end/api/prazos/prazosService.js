const PrazosModel = require('./prazosModel')

module.exports = {
    async List(req, res){
        try {
            const Prazos = await PrazosModel.findAll()
            return res.json(Prazos)
        } catch (error) {
            return console.error("ERROR: ", error);
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
}