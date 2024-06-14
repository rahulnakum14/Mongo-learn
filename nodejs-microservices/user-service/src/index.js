const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

app.post('/signup', (req, res) => {
  res.send('User signup');
});

app.post('/login', (req, res) => {
  res.send('User login');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`User service listening on port ${PORT}`);
});




// http://localhost:3000/api/users/signup
// http://localhost:4000/signup