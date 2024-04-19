const express  = require('express')
const { userRegisterController, loginUserController } = require('../controllers/usersController')
const userRoute = express.Router()


userRoute.route('/users').post(userRegisterController)
userRoute.route('/loginusers').post(loginUserController)


module.exports = userRoute