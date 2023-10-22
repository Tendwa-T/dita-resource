
const express = require('express');
const {
    createUser,
    loginUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');
const router = express.Router();



router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/', getAllUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;