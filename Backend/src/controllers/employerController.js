const employerService = require('../services/employerService');

async function listar(req, res) {

    try {

        const empresas = await employerService.listar();

        res.json(empresas);

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });
    }
}

async function criar(req, res) {

    try {

        const dados = req.body;

        const empresa = await employerService.criar(dados);

        res.status(201).json(empresa);

    } catch (erro) {

        res.status(400).json({
            erro: erro.message
        });
    }
}

async function deletar(req,res){
    

    try{      
        const dados = req.body;
        const empresa = await employerService.deletar(dados);
       
        res.status(201).json(empresa);
        
    }catch(erro){
        res.status(400).json({
            erro:erro.message
        })
    }
}


async function atualizar(req,res){
    

    try{      
        const dados = req.body;
        const empresa = await employerService.atualizar(dados);
       
        res.status(201).json(empresa);
        
    }catch(erro){
        res.status(400).json({
            erro:erro.message
        })
    }
}

async function listarPorId(req,res){
    try{
        const dados = req.params;
        const empresa = await employerService.listarPorId(dados);
        res.status(201).json(empresa);
    }catch(erro){
        res.status(400).json({
            erro:erro.message
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