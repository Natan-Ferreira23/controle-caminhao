
const truckRepository = require('../repositories/truckRepository');

async function listar() {

    return await truckRepository.listar();
}

async function criar(dados) {

    if (!dados.modelo) {
        throw new Error('Modelo obrigatório');
    }     
    if (!dados.placa) {
        throw new Error('Placa obrigatória');
    }
    if (!dados.ano) {
        throw new Error('Ano obrigatório');
    }
    if (!dados.empresa) {
        throw new Error('Empresa obrigatório');
    }
    return await truckRepository.criar(dados);
}

async function deletar(dados) {
    if (!dados.id){
        throw new Error("ID obrigatório !");
    }
    return await truckRepository.deletarPorId(dados);
}

async function atualizar(dados) {
    
    if (!dados.id){
        throw new Error("ID obrigatório !");
    }
    return await truckRepository.atualizarPorId(dados);
}

async function listarPorId(dados){
    if (!dados.id){
        throw new Error("ID obrigatório !");
    }
    return await truckRepository.buscarPorId(dados);
}
async function listarPorEmpresa(dados){
    if (!dados.empresa){
        throw new Error("Empresa obrigatório !");
    }
    return await truckRepository.buscarPorEmpresa(dados);
}

module.exports = {
    listar,
    criar,
    deletar,
    atualizar,
    listarPorId,
    listarPorEmpresa

};