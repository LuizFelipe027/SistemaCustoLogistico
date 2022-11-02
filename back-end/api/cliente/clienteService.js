const clienteModel = require('./clienteModel')

module.exports = {
    async List(req, res){
        try {
            const clientes = await clienteModel.findAll()
            return res.json(clientes)
        } catch (error) {
            return console.error("ERROR: ", error);
        }
    },

    async getOne(req, res){
        try {
            const cliente = await clienteModel.findByPk(req.params.ID)
            return res.json(cliente)
        } catch (error) {
            return console.error("ERROR GETONE: ", error);
        }
    },
}