const express = require('express');

const router = express.Router();

const fuelController = require('../controllers/fuelController');
//autenticacao
const autenticar = require('../middlewares/authMidleware');
router.get('/', autenticar,fuelController.listar);
router.get('/:id', autenticar,fuelController.listarPorId);
router.post('/',autenticar,fuelController.criar);
router.delete('/',autenticar,fuelController.deletar);
router.put('/',autenticar,fuelController.atualizar);

module.exports = router;