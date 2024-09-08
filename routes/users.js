// routes/users.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
// const authenticateJWT = require('../middlewares/auth');
const { isAuthenticated } = require('../middlewares/auth');


// Ruta para obtener usuarios (protegida)
router.get('/users', isAuthenticated, usersController.obtenerDatos);

// Ruta para insertar un usuario (protegida)
router.post('/users',isAuthenticated, usersController.insertarUsuario);

// Ruta para eliminar un usuario por ID (protegida)
router.delete('/users/:id',isAuthenticated, usersController.eliminarUsuario);

// Ruta para modificar un usuario (protegida)
router.put('/users/:id',isAuthenticated, usersController.modificarUsuario);

// Ruta para modificar el rol de un usuario por ID (protegida)
router.put('/users/:id/role',isAuthenticated, usersController.modificarRolUsuario);

// Ruta para obtener la red de un usuario por ID (protegida)
router.get('/users/:id/red',isAuthenticated, usersController.obtenerRedUsuario);

const authController = require('../controllers/authController');
router.post('/login', authController.login);

module.exports = router;
