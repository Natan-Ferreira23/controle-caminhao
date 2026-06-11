const fuelService = require('../services/fuelService');

async function listar(req, res) {

    try {

        const abastecimento = await fuelService.listar();

        res.json(abastecimento);

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });
    }
}

async function criar(req, res) {

    try {

        const dados = req.body;

        const abastecimento = await fuelService.criar(dados);

        res.status(201).json(abastecimento);

    } catch (erro) {

        res.status(400).json({
            erro: erro.message
        });
    }
}

async function deletar(req, res) {


    try {
        const dados = req.body;
        const abastecimento = await fuelService.deletar(dados);

        res.status(201).json(abastecimento);

    } catch (erro) {
        res.status(400).json({
            erro: erro.message
        })
    }
}


async function atualizar(req, res) {


    try {
        const dados = req.body;
        const abastecimento = await fuelService.atualizar(dados);

        res.status(201).json(abastecimento);

    } catch (erro) {
        res.status(400).json({
            erro: erro.message
        })
    }
}

async function listarPorId(req, res) {
    try {
        const dados = req.params;
        const abastecimento = await fuelService.listarPorId(dados);
        res.status(201).json(abastecimento);
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