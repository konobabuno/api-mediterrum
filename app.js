const express = require('express');
const session = require('express-session');
const passport = require('passport');
const userRoutes = require('./routes/users'); // Importa tus rutas de usuarios
require('./passportConfig'); // Importa la configuración de Passport para GitHub

const app = express();

// Middleware de sesión (requerido para Passport)
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

// Iniciar Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json()); // Para manejar JSON en el cuerpo de las solicitudes

// Rutas de autenticación
app.get('/', (req, res) => {
  res.send('Bienvenido, autentícate con GitHub');
});

app.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    // Autenticación exitosa
    res.redirect('/dashboard');
  }
);

// Ruta protegida, solo accesible si el usuario está autenticado
app.get('/dashboard', isAuthenticated, (req, res) => {
  res.send(`Hola, ${req.user.displayName}`);
});

// Usa las rutas de usuarios
app.use('/api', userRoutes);

// Función middleware para proteger rutas
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
  