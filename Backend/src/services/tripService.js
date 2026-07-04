
const tripRepository = require('../repositories/tripRepository');

async function listar() {

    return await tripRepository.listar();
}

async function criar(dados) {

    if (!dados.destino) {
        throw new Error('Destino obrigatório');
    }     
    if (!dados.quantidade) {
        throw new Error('Quantidade obrigatória');
    }
       
    if (!dados.distancia) {
        throw new Error('Distancia obrigatória!');
    }
   
    if (!dados.preco) {
        throw new Error('Preço obrigatório!');
    }
    if (!dados.origem) {
        throw new Error('Origem obrigatório!');
    }
    if (!dados.caminhao) {
        throw new Error('Caminhão obrigatório!');
    }
    if (!dados.usuario) {
        throw new Error('Usuário obrigatório!');
    }
    dados.valorTotal = parseFloat(dados.quantidade) * parseFloat(dados.preco);

    return await tripRepository.criar(dados);
}

async function deletar(dados) {
    if (!dados.id){
        throw new Error("ID obrigatório !");
    }
    return await tripRepository.deletarPorId(dados);
}

async function atualizar(dados) {
    
    if (!dados.id){
        throw new Error("ID obrigatório !");
    }
    
    dados.valorTotal = parseFloat(dados.quantidade) * parseFloat(dados.preco);

    return await tripRepository.atualizarPorId(dados);
}

async function listarPorId(dados){
    if (!dados.id){
        throw new Error("ID obrigatório !");
    }
    return await tripRepository.buscarPorId(dados);
}


module.exports = {
    listar,
    criar,
    deletar,
    atualizar,
    listarPorId    

};