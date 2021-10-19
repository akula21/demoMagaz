const Router  = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const aMiddleware = require('../middleware/aMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', aMiddleware, userController.check)

module.exports = router