
const fuelRepository = require('../repositories/fuelRepository');

async function listar() {

    return await fuelRepository.listar();
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
    if (!dados.local) {
        throw new Error('Local obrigatório!');
    }
    if (!dados.caminhao) {
        throw new Error('Caminhao obrigatório!');
    }

    dados.valorTotal = parseFloat(dados.preco) * parseFloat(dados.quantidade);
    return await fuelRepository.criar(dados);
}

async function deletar(dados) {
    if (!dados.id){
        throw new Error("ID obrigatório !");
    }
    return await fuelRepository.deletarPorId(dados);
}

async function atualizar(dados) {
    
    if (!dados.id){
        throw new Error("ID obrigatório !");
    }

    dados.valorTotal = parseFloat(dados.preco) * parseFloat(dados.quantidade);
    
    return await fuelRepository.atualizarPorId(dados);
}

async function listarPorId(dados){
    if (!dados.id){
        throw new Error("ID obrigatório !");
    }
    return await fuelRepository.buscarPorId(dados);
}


module.exports = {
    listar,
    criar,
    deletar,
    atualizar,
    listarPorId    

};