const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const userRepository = require('../repositories/userRepository');

async function login(email, senha) {

    const usuario = await userRepository.buscarPorEmail(email);

    if (!usuario) {
        throw new Error('Email ou senha inválidos');
    }

    const senhaCorreta = await bcrypt.compare(
        senha,
        usuario.senha
    );

    if (!senhaCorreta) {
        throw new Error('Email ou senha inválidos');
    }

    const token = jwt.sign(
        {
            id: usuario.id,
            email: usuario.email,
            tipo: usuario.tipo
        },
        'segredo_super_secreto',
        {
            expiresIn: '1d'
        }
    );

    return {
        token
    };
}

module.exports = {
    login
};