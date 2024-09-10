// All user end point will be defined here
const express = require("express")

const { registerUser, registerAdmin } = require("../controllers/userController")

const router = express.Router()

//user route
router.post("/register", registerUser)

//admin route
router.post("/admin", registerAdmin)






module.exports = router