const perfilModel = require('./perfilModel')

module.exports = {
    async List(req, res) {
        try {
            const perfil = await perfilModel.findAll()
            return res.json(perfil)
        } catch (error) {
            return console.error("ERROR: ", error);
        }
    },

    async getOne(req, res) {
        try {
            const perfil = await perfilModel.findByPk(req.params.ID)
            return res.json(perfil)
        } catch (error) {
            return console.error("ERROR GETONE: ", error);
        }
    },

}