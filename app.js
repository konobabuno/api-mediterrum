// app.js
const express = require('express');
const app = express();
const userRoute = require('./routes/users');

// Middleware para parsing de JSON
app.use(express.json());

// Rutas
app.use('/api', userRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});