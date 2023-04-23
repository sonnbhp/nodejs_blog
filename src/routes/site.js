var express = require('express')
var router = express.Router()
const siteController = require('../app/controllers/SiteController.js')
//

router.use('/search',siteController.search)
//Gọi phương thức 
router.use('/',siteController.index)
module.exports = router