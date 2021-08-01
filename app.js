const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/home', (req, res) => {
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('O servidor está rodando na porta 3000');
});
