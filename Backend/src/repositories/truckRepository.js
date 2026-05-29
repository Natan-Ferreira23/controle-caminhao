const db = require('../database/db');

async function buscarPorEmpresa(dados) {

    const resultado = await db.query(`
        SELECT 
            id, 
            modelo,
            observacoes,
            placa,
            empresa.nome
        FROM Caminhao
        INNER JOIN Empresa ON empresa.id= $1
    `,[
        dados.empresa
    ]);

    return resultado.rows;
}
async function listar(dados) {

    const resultado = await db.query(`
        SELECT 
           *
        FROM Caminhao        
    `);

    return resultado.rows;
}
async function criar(dados) {

    const resultado = await db.query(`
        INSERT INTO Caminhao (
            modelo,
            ano,
            placa,
            observacoes,
            fk_empresa_id
            )
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
    `,
    [
        dados.modelo,
        dados.ano,
        dados.placa,
        dados.observacoes,
        dados.empresa
    ]);

    return resultado.rows[0];
}

async function buscarPorId(dados) {

    const resultado = await db.query(`
        SELECT *
        FROM Caminhao
        WHERE id= $1        
    `,
    [dados.id]);

    return resultado.rows;
}

async function deletarPorId(dados){
    
    const resultado = await db.query(`
            DELETE FROM Caminhao
            WHERE id=$1
            RETURNING *
        `,[dados.id]);
    
    return resultado.rows[0];
}
async function atualizarPorId(dados){
    
    const resultado = await db.query(`
            UPDATE  Caminhao
            SET modelo= $1, ano=$2, placa=$3, observacoes=$4 WHERE id=$5
            RETURNING *
        `,[
            dados.modelo,
            dados.ano,
            dados.placa,
            dados.observacoes,
            dados.id
        ]);
    
    return resultado.rows[0];
}

module.exports = {
    listar,
    criar,
    buscarPorId,
    buscarPorEmpresa,
    deletarPorId,
    atualizarPorId,
    
};