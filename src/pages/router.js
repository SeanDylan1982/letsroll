const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'c506a954-6054-4d03-8342-ae0a2573b428',
  baseURL: 'http://localhost:3000',
  clientID: 'bQJgSw9Cg1JRLLiJkbGutL1fUkalfvXv',
  issuerBaseURL: 'https://dev-3p13r17dvvshcb3e.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
