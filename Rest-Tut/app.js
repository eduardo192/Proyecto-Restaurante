const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Import Routes
const postsRoute = require('./routes/posts');

//middlewaress
app.use(bodyParser.json());
app.use('/posts', postsRoute);

//Rutas 
app.get('/', (req, res) => {
    res.send('Estamos en casa');
});

app.get('/posts', (req, res) => {
    res.send('Estamos en post');
});

//Connect To DB
mongoose.connect(process.env.DB_CONNECTION,{ useUnifiedTopology: true,  useNewUrlParser: true }, 
    () => console.log('Conctado a la base de datos')
);


//server 
app.listen(3000);