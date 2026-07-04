const tripService = require('../services/tripService');

async function listar(req, res) {

    try {

        const viagem = await tripService.listar();

        res.json(viagem);

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });
    }
}

async function criar(req, res) {

    try {

        const dados = req.body;

        const viagem = await tripService.criar(dados);

        res.status(201).json(viagem);

    } catch (erro) {

        res.status(400).json({
            erro: erro.message
        });
    }
}

async function deletar(req, res) {


    try {
        const dados = req.body;
        const viagem = await tripService.deletar(dados);

        res.status(201).json(viagem);

    } catch (erro) {
        res.status(400).json({
            erro: erro.message
        })
    }
}


async function atualizar(req, res) {


    try {
        const dados = req.body;
        const viagem = await tripService.atualizar(dados);

        res.status(201).json(viagem);

    } catch (erro) {
        res.status(400).json({
            erro: erro.message
        })
    }
}

async function listarPorId(req, res) {
    try {
        const dados = req.params;
        const viagem = await tripService.listarPorId(dados);
        res.status(201).json(viagem);
    } catch (erro) {
        res.status(400).json({
            erro: erro.message
        })
    }
}



module.exports = {
    listar,
    criar,
    deletar,
    atualizar,
    listarPorId  
};