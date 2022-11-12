const entregaModel = require('./entregaModel')

module.exports = {
    async List(req, res) {
        try {
            const entregas = await entregaModel.findAll()
            return res.json(entregas)
        } catch (error) {
            return console.error("ERROR: ", error);
        }
    },

    async create(req, res) {
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

    async update(req, res) {
        try {
            const entrega = await entregaModel.findByPk(req.body.numero_nota)
            if (entrega) {
                entrega.DT_PREV_ENT = req.body.dt_prev_ent || entrega.DT_PREV_ENT
                entrega.DT_ENTREGA = req.body.dt_entrega || entrega.DT_ENTREGA
                entrega.SE_ACORDO = req.body.se_acordo || entrega.SE_ACORDO
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

    async getOne(req, res) {
        try {
            const entrega = await entregaModel.findByPk(req.body.numero_nota)
            return res.json(entrega)
        } catch (error) {
            return console.error("ERROR GETONE: ", error);
        }
    },

    async delete(req, res) {
        try {
            const entrega = await entregaModel.findByPk(req.body.numero_nota)
            await entrega.destroy()
            return res.json(entrega)
        } catch (error) {
            return console.error("ERROR DELETE: ", error);
        }
    },

    async entregas(req, res) {

        //verifica se filtra status
        const PERFIL = req.query.PERFIL ? req.query.PERFIL : null
        const RAZAO_SOCIAL = req.query.RAZAO_SOCIAL ? req.query.RAZAO_SOCIAL : null
        const SCORE_TOTAL = req.query.SCORE_TOTAL ? req.query.SCORE_TOTAL : null

        try {
            const entregas = await entregaModel.sequelize.query(
                `SELECT REL.LUCRO_NOTA, REL.NUMERO_NOTA, REL.VALOR_BRUTO, REL.RAZAO_SOCIAL, REL.CPF_CNPJ, REL.PERFIL, REL.DT_ENTREGA, REL.SCORE_PRAZO,
                REL.SCORE_CALCULADO, REL.SCORE_SATISFACAO, REL.SE_FALTANTE, REL.SE_AVARIADO, REL.SCORE_TOTAL,
                (CASE WHEN REL.SCORE_TOTAL >=0 AND REL.SCORE_TOTAL <4 THEN 'Ruim'
                      WHEN REL.SCORE_TOTAL >=4 AND REL.SCORE_TOTAL <8 THEN 'Regular'
                      WHEN REL.SCORE_TOTAL >=8 AND REL.SCORE_TOTAL <10 THEN 'Boa'
                      ELSE 'Ótima' END) CLASSIFICACAO
                FROM 
                (SELECT (VALOR_BRUTO + VALOR_FRETE - VALOR_IMPOSTOS - VALOR_CUSTO - VALOR_GASTOVAR - VALOR_PEDAGIO - VALOR_HOMHORA - VALOR_COMBUSTIVEL) AS LUCRO_NOTA,
                                E.NUMERO_NOTA, 
                                SC.VALOR_BRUTO, C.RAZAO_SOCIAL, 
                                C.CPF_CNPJ, P.PERFIL, E.DT_ENTREGA, 
                                E.SCORE_PRAZO, SC.SCORE_CALCULADO, 
                                S.SCORE_SATISFACAO, 
                                (CASE WHEN E.SE_FALTANTE = 'S' THEN 0 ELSE 2 END) AS SE_FALTANTE,
                                (CASE WHEN E.SE_AVARIADO = 'S' THEN 0 ELSE 2 END) AS SE_AVARIADO,
                                (E.SCORE_PRAZO + SC.SCORE_CALCULADO + S.SCORE_SATISFACAO + (CASE WHEN E.SE_FALTANTE = 'S' THEN 0 ELSE 2 END) + (CASE WHEN E.SE_AVARIADO = 'S' THEN 0 ELSE 2 END)) AS SCORE_TOTAL
                                                FROM ENTREGA E
                                                JOIN SCORE_LUCRO SC ON SC.NUMERO_NOTA = E.NUMERO_NOTA
                                                JOIN SATISFACAO S ON S.NUMERO_NOTA = E.NUMERO_NOTA
                                                JOIN CLIENTE C ON C.ID_CLIENTE = E.ID_CLIENTE
                                                JOIN PERFIL P ON P.IDPERFIL = C.IDPERFIL
                                WHERE P.PERFIL LIKE ISNULL(${PERFIL}, P.PERFIL)
                                AND C.RAZAO_SOCIAL LIKE ISNULL(${RAZAO_SOCIAL}, C.RAZAO_SOCIAL)) REL
                --AND C.RAZAO_SOCIAL LIKE ISNULL(${SCORE_TOTAL}, C.RAZAO_SOCIAL)`,
                {
                    type: entregaModel.sequelize.QueryTypes.SELECT
                })

            return res.json(entregas)

        } catch (error) {
            console.log(error)
        }
    }
}