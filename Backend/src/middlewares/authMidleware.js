const jwt = require('jsonwebtoken');

function autenticar(req, res, next) {
    console.log(req.headers);
    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {

            return res.status(401).json({
                erro: 'Token não informado'
            });
        }

        const token = authHeader.split(' ')[1];

        const decoded = jwt.verify(
            token,
            'segredo_super_secreto'
        );

        req.usuario = decoded;

        next();

    } catch (erro) {

        return res.status(401).json({
            erro: 'Token inválido'
        });
    }
}

module.exports = autenticar;