const express =  require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const rotasEventos = require('./views/eventos').router;
const app = express();


app.use(cors());

app.set('view engine', 'ejs');
app.set('pages', path.join(__dirname, 'pages'));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/eventos', rotasEventos);

module.exports = {app};