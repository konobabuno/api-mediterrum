function isAuthenticated(req, res, next) {
  // Verifica si el usuario está autenticado mediante Passport.js
  if (req.isAuthenticated()) {
    return next(); // Si está autenticado, procede a la siguiente función (controlador)
  }
  // Si no está autenticado, redirige a la página de inicio de sesión
  res.redirect('/auth/github');
}

module.exports = { isAuthenticated };