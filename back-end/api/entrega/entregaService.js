const { isNull } = require('lodash');
const entregaModel = require('./entregaModel')

module.exports = {
    async List(req, res){
        try {
            const entregas = await entregaModel.findAll()
            return res.json(entregas)
        } catch (error) {
            return console.error("ERROR: ", error);
        }
    },

    async create(req, res){
        try {
             
            const entregas = await entregaModel.create({
                NUMERO_NOTA: req.body.numero_nota,
                DT_PREV_ENT: req.body.dt_prev_ent,
                DT_ENTREGA: req.body.dt_entrega,
                SE_ACORDO: req.body.se_acordo,
				SE_FALTANTE: req.body.se_faltante,
				SE_AVARIADO: req.body.se_avariado,
				SCORE_PRAZO: req.body.score_prazo
            })
            return res.json(entregas)
        } catch (error) {
            return console.error("ERROR CREATE: ", error);
        }
    },

    async update(req, res){
        try {
            const entrega = await entregaModel.findByPk(req.body.numero_nota)
            if(entrega){
                entrega.DT_PREV_ENT = req.body.dt_prev_ent || entrega.DT_PREV_ENT
                entrega.DT_ENTREGA = req.body.dt_entrega || entrega.DT_ENTREGA
                entrega.SE_ACORDO = req.body.se_acordo|| entrega.SE_ACORDO
				entrega.SE_FALTANTE = req.body.se_faltante || entrega.SE_FALTANTE
				entrega.SE_AVARIADO = req.body.se_avariado || entrega.SE_AVARIADO
				entrega.SCORE_PRAZO = req.body.score_prazo || entrega.SCORE_PRAZO
                await entrega.save()
            }
            return res.json(entrega)
        } catch (error) {
            return console.error("ERROR UPDATE: ", error);
        }
    },

    async getOne(req, res){
        try {
            const entrega = await entregaModel.findByPk(req.body.numero_nota)
            return res.json(entrega)
        } catch (error) {
            return console.error("ERROR GETONE: ", error);
        }
    },

    async delete(req, res){
        try {
            const entrega = await entregaModel.findByPk(req.body.numero_nota)
            await entrega.destroy()
            return res.json(entrega)
        } catch (error) {
            return console.error("ERROR DELETE: ", error);
        }
    },

    async entregas(req, res){
        try {
            const cnpj = '13141'
            const entregas = await entregaModel.sequelize.query(
                `SELECT E.NUMERO_NOTA, SC.VALOR_BRUTO, C.RAZAO_SOCIAL, C.CPF_CNPJ, P.PERFIL, E.DT_ENTREGA, 
                (E.SCORE_PRAZO + SC.SCORE_CALCULADO + S.SCORE_SATISFACAO + (CASE WHEN E.SE_FALTANTE = 'S' THEN 0 ELSE 2 END) + (CASE WHEN E.SE_AVARIADO = 'S' THEN 0 ELSE 2 END)) AS SCORE_TOTAL
                FROM ENTREGA E
                JOIN SCORE_LUCRO SC ON SC.NUMERO_NOTA = E.NUMERO_NOTA
                JOIN SATISFACAO S ON S.NUMERO_NOTA = E.NUMERO_NOTA
                JOIN CLIENTE C ON C.ID_CLIENTE = E.ID_CLIENTE
                JOIN PERFIL P ON P.IDPERFIL = C.IDPERFIL
                WHERE c.CPF_CNPJ LIKE ISNULL(${cnpj}, C.CPF_CNPJ)
                `, {
                type: entregaModel.sequelize.QueryTypes.SELECT
            })

            return res.json(entregas)
            
        } catch (error) {
            console.log(error)
        }
    }
}