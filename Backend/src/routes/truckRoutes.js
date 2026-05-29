const express = require('express');

const router = express.Router();

const truckController = require('../controllers/truckController');
//autenticacao
const autenticar = require('../middlewares/authMidleware');
router.get('/', autenticar,truckController.listar);
router.get('/:id', autenticar,truckController.listarPorId);
router.get('/:empresa', autenticar,truckController.listarPorEmpresa);
router.post('/',autenticar,truckController.criar);
router.delete('/',autenticar,truckController.deletar);
router.put('/',autenticar,truckController.atualizar);

module.exports = router;