const path = require('path');
const express = require('express');

const router = express.Router();
const candycontroller = require('../controllers/candy');

router.post('/add-candy', candycontroller.addCandy);
//router.get('/get-company/:companyName', companycontroller.getCompany);

module.exports = router;