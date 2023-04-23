var express = require('express')
var router = express.Router()
const newsController = require('../app/controllers/NewsController.js')
//

router.use('/:slug',newsController.show)
//Gọi phương thức newscontroler
router.use('/',newsController.index)
module.exports = router