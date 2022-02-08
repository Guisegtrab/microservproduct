const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const product = {};

app.get('/product', (req, res) => {
  res.send(product);
});

app.post('/product', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { codigo } = req.body;Number;
  const { descricao } = req.body;
  const { quantidade } = req.body;
  const { valor } = req.body;
  

  product[id] = {
    id,
    codigo,
    descricao,
    quantidade,
    valor
  };

  res.status(201).send(product[id]);
});

app.listen(4000, () => {
  console.log('Ouvindo em 4000');
});