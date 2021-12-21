const express = require('express');
const router = express.Router();
let { index } = require('../controllers/mainController')
let admin = require('../middlewares/admin')




router.get('/', index);
router.get('/admin', admin);




module.exports = router;