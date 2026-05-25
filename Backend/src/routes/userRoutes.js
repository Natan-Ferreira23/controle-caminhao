const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
//autenticacao
const autenticar = require('../middlewares/authMidleware');
router.get('/', autenticar,userController.listar);
router.post('/', userController.criar);
router.delete('/',autenticar,userController.deletar);

module.exports = router;