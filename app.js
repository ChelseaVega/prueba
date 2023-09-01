require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

//conexion a la bd

(async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI_DEV);
        console.log('Te has conectado a MongoDB');
    }catch(error){
        console.log('error');
    }
})();

//crear las rutas de frontend para localhost:3000

app.use('/',express.static(path.resolve('views','home')));
app.use('/components',express.static(path.resolve('views','components')));
app.use('/login',express.static(path.resolve('views','login')));
app.use('/registro',express.static(path.resolve('views','registro')));


module.exports = app;