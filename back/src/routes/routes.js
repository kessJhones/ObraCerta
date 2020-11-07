const express = require('express')
const router = express.Router();
const UserController = require('../controllers/UserController')
const testUserController = require('../controllers/testUserController')//temp

// Rotas para a pagina inicial da aplicação
router.get('/', (req, res) => res.send("hello"))

// Rotas de cadastro e login de usuário
router.get('/registrar', (req, res) => res.send("Registrar"));
router.post('/registrar', UserController.store);

router.get('/login', (req, res) => res.send('Logar'));


// campo temporario para teste das models
router.post('/postUser', testUserController.saveUser) //temp
router.get('/getUsers', testUserController.listUsers) //temp
//fim do campo temporario
module.exports = router