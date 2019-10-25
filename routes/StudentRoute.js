const StudentController = require('../controllers/StudentController');


const express = require('express');
var bodyParser = require('body-parser');
var router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());



router.post('/save', StudentController.save);





module.exports = router;
