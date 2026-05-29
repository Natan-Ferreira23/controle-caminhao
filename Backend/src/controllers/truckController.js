const truckService = require('../services/truckService');

async function listar(req, res) {

    try {

        const caminhao = await truckService.listar();

        res.json(caminhao);

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });
    }
}

async function criar(req, res) {

    try {

        const dados = req.body;

        const caminhao = await truckService.criar(dados);

        res.status(201).json(caminhao);

    } catch (erro) {

        res.status(400).json({
            erro: erro.message
        });
    }
}

async function deletar(req, res) {


    try {
        const dados = req.body;
        const caminhao = await truckService.deletar(dados);

        res.status(201).json(caminhao);

    } catch (erro) {
        res.status(400).json({
            erro: erro.message
        })
    }
}


async function atualizar(req, res) {


    try {
        const dados = req.body;
        const caminhao = await truckService.atualizar(dados);

        res.status(201).json(caminhao);

    } catch (erro) {
        res.status(400).json({
            erro: erro.message
        })
    }
}

async function listarPorId(req, res) {
    try {
        const dados = req.params;
        const caminhao = await truckService.listarPorId(dados);
        res.status(201).json(caminhao);
    } catch (erro) {
        res.status(400).json({
            erro: erro.message
        })
    }
}


async function listarPorEmpresa(req, res) {
    try {
        const dados = req.params;
        const caminhao = await truckService.listarPorEmpresa(dados);
        res.status(201).json(caminhao);
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
    listarPorId,
    listarPorEmpresa
};