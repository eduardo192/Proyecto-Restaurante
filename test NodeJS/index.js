'use stric'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Product = require('./models/products.js') ;

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/*app.get('/hola/:name', (req, res) => {
    res.send({ message : `Hola ${req.params.name}`});
});*/

/*app.get('/api/product', (req, res) => {
    res.send(200, {Products : []})
});*/

app.get('/api/product/:productId', (req,res) =>{
    let productId
});

async function agregarProducto(req,res){

    try{
        const {
            Name,
            size,
            unitaryPrice,
            Description
        } = req.body;

        const product = Product( {
            Name,
            size,
            unitaryPrice,
            Description
        } );    

        const productStored = await product.save()
        res.status(200).send({ productStored });

        console.log(productStored)
        console.log(req.body)
    }catch (e){
        res.status(500).send({ message : e.message })
    }
    
    
   /* console.log('POST  /api/product');
    console.log(req.body);

    let product = new Product();

    product.name = req.body.name; //console.log( `req.body.name: ${req.body}` );
    product.picture =  req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;

    product.save(); (err,productStored) => {
        if(err) res.status(500).send({Message: `error al salvar la base de datos: ${err}`});

        res.status(200).send({productStored});
    });*/



}

app.post('/api/product', agregarProducto);

app.put('/api/product/:productId', (req,res)=>{

});

app.delete('/api/product/:pruductId', (req,res)=>{

});

mongoose.connect('mongodb://localhost:27017/shop', (err,res) => {
    if(err){
        console.log(`Error al connectar con la base de datos: ${err}`)
    };
    console.log('coneccion con la base de datos establecida');

    app.listen(port, () => {    
        console.log(`api rest corriendo en http://localhost:${port}`)
    });
})

