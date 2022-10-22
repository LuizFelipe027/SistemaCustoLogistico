const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./usuarioService')
const env = require('../../.env')

const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%!]).{6,12})/

const sendErrosFromDB = (res, dbErros) => {
    const errors = []
    _.forIn(dbErros.errors, error => errors.push(error.message))
    return res.status(400).json({ errors })
}

const login = (req, resp) => {
    const email = req.body.email || ''
    const password = req.body.password || ''

    User.getOne({ email }, (err, usuario) => {
        if (err) {
            return sendErrorsFromDB(resp, err)
        } else if (usuario && bcrypt.compareSync(password, usuario.password)) {
            const token = jwt.sign(usuario, env.authSecret, {
                expiresIn: "7 days"
            })
            const { _id, nome, email } = usuario
            resp.json({ _id, nome, email, token })
        } else {
            return resp.status(400).send({ errors: ['Usuário/Senha inválidos'] })
        }
    })
}

const validateToken = (req, res) => {
    const token = req.body.token || ''
    jwt.verify(token, env.authSecret, function (err, decoded) {
        return res.status(200).send({ valid: !err })
    })
}

const signup = (req, res) => {
    const name = req.body.NOME || ''
    const email = req.body.EMAIL || ''
    const password = req.body.SENHA || ''
    const confirmPassword = req.body.confirmPassword || ''

    if (!email.match(emailRegex)) {
        return res.status(400).send({ errors: ['O email informado está inválido!'] })
    }
    if (!password.match(passwordRegex)) {
        return res.status(400).send({
            errors: [
                'Senha precisa ter: uma letra maiúscula, uma letra minúscula, um número, uma'
            ]
        })
    }


    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)
    if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
        return res.status(400).send({ errors: ['Senhas não conferem!'] })
    }

    User.getOne({ email }, (err, user) => {
        if (err) {
            return sendErrosFromDB(res, err)
        } else if (user) {
            return res.status(400).send({ errors: ['Usuário já cadastrado'] })
        } else {
            const newUser = new User({ name, email, password: passwordHash })
            newUser.save(err => {
                if (err) {
                    return sendErrosFromDB(res, err)
                } else {
                    login(req, res)
                }
            })
        }
    })
}

module.exports = { login, signup, validateToken }