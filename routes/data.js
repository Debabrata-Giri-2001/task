const express = require('express');
const userController = require('../controller/data/AllData')
const router = express.Router()


//CRUD - API
router
.get('/user',userController.getUser)


exports.routers = router;
