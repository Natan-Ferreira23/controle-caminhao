const userService = require('../services/userService');

async function listar(req, res) {

    try {

        const usuarios = await userService.listar();

        res.json(usuarios);

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });
    }
}

async function criar(req, res) {

    try {

        const dados = req.body;

        const usuario = await userService.criar(dados);

        res.status(201).json(usuario);

    } catch (erro) {

        res.status(400).json({
            erro: erro.message
        });
    }
}

module.exports = {
    listar,
    criar
};