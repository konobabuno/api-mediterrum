const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
require('dotenv').config();

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    // Aquí puedes buscar o crear el usuario en tu base de datos usando el perfil de GitHub
    return done(null, profile);
  }
));

// Serializa el usuario en la sesión
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserializa el usuario
passport.deserializeUser((user, done) => {
  done(null, user);
});
