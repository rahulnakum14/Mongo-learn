const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Get all products');
});

app.post('/', (req, res) => {
  res.send('Create a new product');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Product service listening on port ${PORT}`);
});
