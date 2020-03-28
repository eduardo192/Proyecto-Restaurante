'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
    Name: String,
    unitaryPrice: Number,
    Description: String,
    size: Number
});


module.exports = mongoose.model('Product',ProductSchema);