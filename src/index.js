const express = require('express');
const methodOverride = require('method-override');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());                         
app.use(methodOverride('_method'));              

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.static(path.join(__dirname, '../public')));
const veiculoRoute = require('./route/veiculoRoute');
app.get('/', (_, res) => res.redirect('/veiculos'));
app.use('/veiculos', veiculoRoute);

app.listen(PORT, () => console.log(`Servidor rodando em: http://localhost:${PORT}`));