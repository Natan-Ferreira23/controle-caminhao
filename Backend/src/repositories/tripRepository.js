const db = require('../database/db');


async function listar(dados) {

    const resultado = await db.query(`
        SELECT 
           *
        FROM Viagem        
    `);

    return resultado.rows;
}
async function criar(dados) {

    const resultado = await db.query(`
        INSERT INTO Viagem (
            destino,
            quantidade,
            distancia,
            preco_unitario,
            valor_total,
            data,
            origem,
            fk_caminhao_id,
            fk_usuario_id
            )
        VALUES ($1, $2, $3, $4, $5, CURRENT_DATE, $6, $7, $8)
        RETURNING * 
    `,
    [
        dados.destino,
        dados.quantidade,
        dados.distancia,        
        dados.preco,
        dados.valorTotal,
        dados.origem,
        dados.caminhao,
        dados.usuario
    ]);

    return resultado.rows[0];
}

async function buscarPorId(dados) {

    const resultado = await db.query(`
        SELECT *
        FROM Viagem
        WHERE id= $1        
    `,
    [dados.id]);

    return resultado.rows;
}

async function deletarPorId(dados){
    
    const resultado = await db.query(`
            DELETE FROM Viagem
            WHERE id=$1
            RETURNING *
        `,[dados.id]);
    
    return resultado.rows[0];
}
async function atualizarPorId(dados){
    
    const resultado = await db.query(`
            UPDATE  Viagem
            SET destino= $1, quantidade=$2, distancia=$3,preco_unitario=$4,valor_total=$5, origem=$6, fk_caminhao_id=$7, fk_usuario_id=$8 WHERE id=$9
            RETURNING *
        `,[
            dados.destino,
            dados.quantidade,
            dados.distancia,
            dados.preco,
            dados.valorTotal,            
            dados.origem,           
            dados.caminhao,
            dados.usuario,
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