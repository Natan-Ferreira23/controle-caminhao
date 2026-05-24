const bcrypt = require('bcrypt');
const userRepository = require('../repositories/userRepository');

async function listar() {

    return await userRepository.listar();
}

async function criar(dados) {

    if (!dados.nome) {
        throw new Error('Nome obrigatório');
    }

    if (!dados.email) {
        throw new Error('Email obrigatório');
    }

    if (!dados.senha) {
        throw new Error('Senha obrigatória');
    }
    if (!dados.tipo) {
        throw new Error('Tipo obrigatório');
    }
     if (!dados.cpf) {
        throw new Error('Cpf obrigatório');
    }

    // Criptografa senha
    const senhaHash = await bcrypt.hash(dados.senha, 10);

    dados.senha = senhaHash;
    return await userRepository.criar(dados);
}

module.exports = {
    listar,
    criar
};