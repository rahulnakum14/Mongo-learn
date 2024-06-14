const express = require('express');
const mongoRouter = express.Router();    
const {mongoDbpractice} = require('../controller/mongo_Controller');   

mongoRouter.get('/',mongoDbpractice);

module.exports = {
    mongoRouter
}