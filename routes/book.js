var express = require('express');
var router = express.Router();
const app = express()

const book = require('../dataapi/Patientinformation.json')


app.get('/book', (req,res) =>{
    res.json(book)
  })