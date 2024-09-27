
//1 st step
const express = require("express");

//2nd step
const router = express.Router()

//3rd step
const profileController = require('../controllers/profile')

//4th step
router.post('/profile', profileController.newProfile)
router.get('/profile', profileController.getProfile)

//5th step
module.exports=router 