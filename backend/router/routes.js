
const express = require('express');

const router = express.Router();

const controller = require('../controller/controller');

router.get('/getDetails',controller.getDetails);

router.post('/sentDetails',controller.postDetails);

router.post('/editDetails/:id',controller.editDetails);

router.post('/deleteDetails/:id',controller.deleteDetails);

module.exports= router