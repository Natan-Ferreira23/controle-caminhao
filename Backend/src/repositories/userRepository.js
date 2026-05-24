const db = require('../database/db');

async function listar() {

    const resultado = await db.query(`
        SELECT *
        FROM Usuario
    `);

    return resultado.rows;
}

async function criar(dados) {

    const resultado = await db.query(`
        INSERT INTO Usuario (
            nome,
            email,
            senha,
            celular,
            cpf,
            tipo
        )
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
    `,
    [
        dados.nome,
        dados.email,
        dados.senha,
        dados.celular,
        dados.cpf,
        dados.tipo
    ]);

    return resultado.rows[0];
}

async function buscarPorEmail(email) {

    const resultado = await db.query(`
        SELECT *
        FROM Usuario
        WHERE email = $1
    `,
    [email]);

    return resultado.rows[0];
}

module.exports = {
    listar,
    criar,
    buscarPorEmail
};