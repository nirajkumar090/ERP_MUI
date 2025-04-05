const express = require('express')

const auth_controllers = require('../AuthController/user_controller')
// const { models } = require('mongoose')
const Router = express.Router()

Router.route('/user_register').post(auth_controllers.userRegister)
Router.route('/user_login').post(auth_controllers.userLogin)

module.exports = Router;