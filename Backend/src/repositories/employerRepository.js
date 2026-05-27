const db = require('../database/db');

async function listar() {

    const resultado = await db.query(`
        SELECT 
            id, 
            nome,
            cnpj
        FROM Empresa
    `);

    return resultado.rows;
}

async function criar(dados) {

    const resultado = await db.query(`
        INSERT INTO Empresa (
            nome,
            cnpj
            )
        VALUES ($1, $2)
        RETURNING *
    `,
    [
        dados.nome,
        dados.cnpj
    ]);

    return resultado.rows[0];
}

async function buscarPorId(dados) {

    const resultado = await db.query(`
        SELECT *
        FROM Empresa
        WHERE id= $1
    `,
    [dados.id]);

    return resultado.rows[0];
}

async function deletarPorId(dados){
    
    const resultado = await db.query(`
            DELETE FROM Empresa
            WHERE id=$1
            RETURNING *
        `,[dados.id]);
    
    return resultado.rows[0];
}
async function atualizarPorId(dados){
    
    const resultado = await db.query(`
            UPDATE  Empresa
            SET nome = $1, cnpj=$2 WHERE id=$3
            RETURNING *
        `,[
            dados.nome,
            dados.cnpj,
            dados.id
        ]);
    
    return resultado.rows[0];
}

module.exports = {
    listar,
    criar,
    buscarPorId,
    deletarPorId,
    atualizarPorId
};