
const employerRepository = require('../repositories/employerRepository');

async function listar() {

    return await employerRepository.listar();
}

async function criar(dados) {

    if (!dados.nome) {
        throw new Error('Nome obrigatório');
    }     
     if (!dados.cnpj) {
        throw new Error('Cnpj obrigatório');
    }
    
    return await employerRepository.criar(dados);
}

async function deletar(dados) {
    if (!dados.id){
        throw new Error("ID obrigatório !");
    }
    return await employerRepository.deletarPorId(dados);
}

async function atualizar(dados) {
    
    if (!dados.id){
        throw new Error("ID obrigatório !");
    }
    return await employerRepository.atualizarPorId(dados);
}

module.exports = {
    listar,
    criar,
    deletar,
    atualizar
};