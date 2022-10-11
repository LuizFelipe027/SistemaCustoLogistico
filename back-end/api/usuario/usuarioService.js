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
                ID: req.body.id,
                NOME: req.body.nome,
                SENHA: req.body.senha,
                EMAIL: req.body.email
            })
            return res.json(Usuarios)
        } catch (error) {
            return console.error("ERROR CREATE: ", error);
        }
    },

    async update(req, res){
        try {
            const usuario = await usuarioModel.findByPk(req.body.id)
            if(usuario){
                usuario.NOME = req.body.nome || usuario.NOME
                usuario.SENHA = req.body.senha || usuario.SENHA
                usuario.EMAIL = req.body.email || usuario.EMAIL
                await usuario.save()
            }
            return res.json(usuario)
        } catch (error) {
            return console.error("ERROR UPDATE: ", error);
        }
    },

    async getOne(req, res){
        try {
            const usuario = await usuarioModel.findByPk(req.body.id)
            return res.json(usuario)
        } catch (error) {
            return console.error("ERROR GETONE: ", error);
        }
    },

    async delete(req, res){
        try {
            const usuario = await usuarioModel.findByPk(req.body.id)
            await usuario.destroy()
            return res.json(usuario)
        } catch (error) {
            return console.error("ERROR DELETE: ", error);
        }
    }
}