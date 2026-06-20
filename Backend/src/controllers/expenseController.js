const expenseService = require('../services/expenseService');

async function listar(req, res) {

    try {

        const gasto = await expenseService.listar();

        res.json(gasto);

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });
    }
}

async function criar(req, res) {

    try {

        const dados = req.body;

        const gasto = await expenseService.criar(dados);

        res.status(201).json(gasto);        

    } catch (erro) {

        res.status(400).json({
            erro: erro.message
        });
    }
}

async function deletar(req, res) {


    try {
        const dados = req.body;
        const gasto = await expenseService.deletar(dados);

        res.status(201).json(gasto);

    } catch (erro) {
        res.status(400).json({
            erro: erro.message
        })
    }
}


async function atualizar(req, res) {


    try {
        const dados = req.body;
        const gasto = await expenseService.atualizar(dados);

        res.status(201).json(gasto);

    } catch (erro) {
        res.status(400).json({
            erro: erro.message
        })
    }
}

async function listarPorId(req, res) {
    try {
        const dados = req.params;
        const gasto = await expenseService.listarPorId(dados);
        res.status(201).json(gasto);
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