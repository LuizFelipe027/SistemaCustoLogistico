const usuarioModel = require('./usuarioModel')

module.exports = {
    async List(req, res){
        try {
            const Usuarios = await usuarioModel.findAll()
            return res.json(Usuarios)
        } catch (error) {
            return console.error("ERROR: ", error);
        }
    },

    async create(req, res){
        try {
            const Usuarios = await usuarioModel.create({
                ID: req.body.IDUSUARIO,
                NOME: req.body.NOME,
                SENHA: req.body.SENHA,
                EMAIL: req.body.EMAIL
            })
            return res.json(Usuarios)
        } catch (error) {
            return console.error("ERROR CREATE: ", error);
        }
    },

    async update(req, res){
        try {
            const usuario = await usuarioModel.findByPk(req.params.ID)
            if(usuario){
                usuario.NOME = req.body.NOME || usuario.NOME
                usuario.SENHA = req.body.SENHA || usuario.SENHA
                usuario.EMAIL = req.body.EMAIL || usuario.EMAIL
                await usuario.save()
            }
            return res.json(usuario)
        } catch (error) {
            return console.error("ERROR UPDATE: ", error);
        }
    },

    async getOne(req, res){
        try {
            const usuario = await usuarioModel.findByPk(req.params.ID)
            return res.json(usuario)
        } catch (error) {
            return console.error("ERROR GETONE: ", error);
        }
    },

    async delete(req, res){
        try {
            const usuario = await usuarioModel.findByPk(req.params.ID)
            await usuario.destroy()
            return res.json(usuario)
        } catch (error) {
            return console.error("ERROR DELETE: ", error);
        }
    }
}