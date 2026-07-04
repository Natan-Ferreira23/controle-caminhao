const express = require('express');

const router = express.Router();

const tripController = require('../controllers/tripController');
//autenticacao
const autenticar = require('../middlewares/authMidleware');
router.get('/', autenticar,tripController.listar);
router.get('/:id', autenticar,tripController.listarPorId);
router.post('/',autenticar,tripController.criar);
router.delete('/',autenticar,tripController.deletar);
router.put('/',autenticar,tripController.atualizar);

module.exports = router;