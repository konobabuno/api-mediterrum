const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Simula una base de datos con contraseñas encriptadas
const usuarios = [
    { 
      id: 1, 
      nombre: 'Mediterrum', 
      email: 'hey@mediterrum.com', 
      password: bcrypt.hashSync(process.env.JWT_PASSWORD, 10)  // Encripta la contraseña "123456"
    }
  ];

// Controlador para el login
const login = (req, res) => {
  const { email, password } = req.body;
  const usuario = usuarios.find(u => u.email === email);

  if (usuario) {
    // Compara la contraseña enviada con la guardada encriptada
    const isMatch = bcrypt.compareSync(password, usuario.password);

    if (isMatch) {
      // Generar un token JWT
      const token = jwt.sign({ id: usuario.id, email: usuario.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.json({ token });
    } else {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }
  } else {
    return res.status(400).json({ message: 'Usuario no encontrado' });
  }
};

module.exports = { login };
