const router = require('express').Router();
const controller = require('../controller/userController')

router
    .get('/', controller.getAllUsers)
    .get('/:id', controller.getSingleUser)
    .post('/', controller.createUser)

module.exports = router;