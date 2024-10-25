const express = require('express')
const {loginUser, signupUser} = require('../controllers/userController')

const router = express.Router()

//LOGIN USER
router.post("/login", loginUser)

//SIGNUP USER
router.post("/signup", signupUser)

module.exports = router