const db = require('../database/db');


async function listar(dados) {

    const resultado = await db.query(`
        SELECT 
           *
        FROM Gasto        
    `);

    return resultado.rows;
}
async function criar(dados) {

    const resultado = await db.query(`
        INSERT INTO Gasto (
            tipo,
            descricao,
            quantidade,
            valor_unitario,
            valor_total,
            data,
            fk_caminhao_id
            )
        VALUES ($1, $2, $3, $4,$5,CURRENT_DATE,$6)
        RETURNING *
    `,
        [
            dados.tipo,
            dados.descricao,
            dados.quantidade,
            dados.preco,
            dados.valorTotal,            
            dados.caminhao
        ]);

    return resultado.rows[0];
}

async function buscarPorId(dados) {

    const resultado = await db.query(`
        SELECT *
        FROM Gasto
        WHERE id= $1        
    `,
        [dados.id]);

    return resultado.rows;
}

async function deletarPorId(dados) {

    const resultado = await db.query(`
            DELETE FROM Gasto
            WHERE id=$1
            RETURNING *
        `, [dados.id]);

    return resultado.rows[0];
}
async function atualizarPorId(dados) {

    const resultado = await db.query(`
            UPDATE  Gasto
            SET tipo=$1, descricao=$2,quantidade=$3,valor_unitario=$4,valor_total=$5,fk_caminhao_id=$6 WHERE id=$7
            RETURNING *
        `, [
        dados.tipo,
        dados.descricao,
        dados.quantidade,
        dados.preco,
        dados.valorTotal,              
        dados.caminhao,
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