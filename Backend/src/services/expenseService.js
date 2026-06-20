
const expenseRepository = require('../repositories/expenseRepository');

async function listar() {

    return await expenseRepository.listar();
}

async function criar(dados) {

    if (!dados.quantidade) {
        throw new Error('Quantidade obrigatória');
    }     
    if (!dados.preco) {
        throw new Error('Preço unitário obrigatório');
    }
       
    if (!dados.descricao) {
        throw new Error('Descrição obrigatória!');
    }
    if (!dados.tipo) {
        throw new Error('Tipo obrigatório!');
    }
    if (!dados.caminhao) {
        throw new Error('Caminhao obrigatório!');
    }

    dados.valorTotal = parseFloat(dados.preco) * parseFloat(dados.quantidade);
    return await expenseRepository.criar(dados);
}

async function deletar(dados) {
    if (!dados.id){
        throw new Error("ID obrigatório !");
    }
    return await expenseRepository.deletarPorId(dados);
}

async function atualizar(dados) {
    
    if (!dados.id){
        throw new Error("ID obrigatório !");
    }
    dados.valorTotal = parseFloat(dados.preco) * parseFloat(dados.quantidade);
    
    return await expenseRepository.atualizarPorId(dados);
}

async function listarPorId(dados){
    if (!dados.id){
        throw new Error("ID obrigatório !");
    }
    return await expenseRepository.buscarPorId(dados);
}


module.exports = {
    listar,
    criar,
    deletar,
    atualizar,
    listarPorId    

};