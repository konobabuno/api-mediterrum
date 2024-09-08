// routes/users.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');


// Ruta para obtener usuarios
router.get('/users', usersController.obtenerDatos);

// Ruta para insertar un usuario
router.post('/users', usersController.insertarUsuario);

// Ruta para eliminar un usuario por ID
router.delete('/users/:id', usersController.eliminarUsuario);

// Ruta para modificar un usuario
router.put('/users/:id', usersController.modificarUsuario);

// Ruta para modificar el rol de un usuario por ID
router.put('/users/:id/role', usersController.modificarRolUsuario);

// Ruta para obtener la red de un usuario por ID
router.get('/users/:id/red', usersController.obtenerRedUsuario);

module.exports = router;
