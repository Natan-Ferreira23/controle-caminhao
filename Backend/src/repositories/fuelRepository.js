const db = require('../database/db');


async function listar(dados) {

    const resultado = await db.query(`
        SELECT 
           *
        FROM Abastecimento        
    `);

    return resultado.rows;
}
async function criar(dados) {

    const resultado = await db.query(`
        INSERT INTO Abastecimento (
            quantidade,
            preco_unitario,
            valor_total,
            data,
            descricao,
            local,
            fk_caminhao_id
            )
        VALUES ($1, $2, $3,CURRENT_DATE ,$4, $5,$6)
        RETURNING *
    `,
    [
        dados.quantidade,
        dados.preco,
        dados.valorTotal,        
        dados.descricao,
        dados.local,
        dados.caminhao
    ]);

    return resultado.rows[0];
}

async function buscarPorId(dados) {

    const resultado = await db.query(`
        SELECT *
        FROM Abastecimento
        WHERE id= $1        
    `,
    [dados.id]);

    return resultado.rows;
}

async function deletarPorId(dados){
    
    const resultado = await db.query(`
            DELETE FROM Abastecimento
            WHERE id=$1
            RETURNING *
        `,[dados.id]);
    
    return resultado.rows[0];
}
async function atualizarPorId(dados){
    
    const resultado = await db.query(`
            UPDATE  Abastecimento
            SET quantidade= $1, preco_unitario=$2, valor_total=$3,descricao=$4,local=$5,fk_caminhao_id=$6 WHERE id=$7
            RETURNING *
        `,[
            dados.quantidade,
            dados.preco,
            dados.valorTotal,            
            dados.descricao,
            dados.local,
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