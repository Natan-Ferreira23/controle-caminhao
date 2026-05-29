const express = require('express');

const router = express.Router();

const employerController = require('../controllers/employerController');
//autenticacao
const autenticar = require('../middlewares/authMidleware');
router.get('/', autenticar,employerController.listar);
router.get('/:id', autenticar,employerController.listarPorId);
router.post('/',autenticar,employerController.criar);
router.delete('/',autenticar,employerController.deletar);
router.put('/',autenticar,employerController.atualizar);

module.exports = router;