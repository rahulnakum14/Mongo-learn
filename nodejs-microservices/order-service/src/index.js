const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Get all orders');
});

app.post('/', (req, res) => {
  res.send('Create a new order');
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Order service listening on port ${PORT}`);
});
