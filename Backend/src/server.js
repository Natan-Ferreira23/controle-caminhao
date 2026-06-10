const path = require('path')
require('dotenv').config(    
    {
        path: path.resolve(__dirname, '../.env')
    }
)
const app = require('./app');
const db = require('./database/db');

const port = process.env.port;

async function startServer() {

    try {

        await db.query('SELECT 1');

        console.log('Banco conectado com sucesso!');

        app.listen(port, () => {
            console.log(`Servidor Rodando na porta: ${port}`);
        });

    } catch (erro) {

        console.error('Erro ao conectar no banco');

        console.error(erro);
    }
}

startServer();