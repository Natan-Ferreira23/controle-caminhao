const express = require('express');

const router = express.Router();

const expenseController = require('../controllers/expenseController');
//autenticacao
const autenticar = require('../middlewares/authMidleware');
router.get('/', autenticar,expenseController.listar);
router.get('/:id', autenticar,expenseController.listarPorId);
router.post('/',autenticar,expenseController.criar);
router.delete('/',autenticar,expenseController.deletar);
router.put('/',autenticar,expenseController.atualizar);

module.exports = router;