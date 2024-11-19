const express = require('express');
const { registerController, loginController, currentUserController, activeUsersByRoleController } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// REGISTER || POST
router.post('/register',registerController)   

//LOGIN || POST
router.post('/login',loginController)

//GET USER || GET
router.get('/current-user', authMiddleware,currentUserController )

//GET ACTIVE USERS BY ROLE || GET

router.get('/active-users', authMiddleware, activeUsersByRoleController);
module.exports = router;

