const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.post('/', usersController.create);
router.get('/', usersController.index);
router.get('/:userId', usersController.show);
router.put('/:userId', usersController.update);
router.delete('/:userId', usersController.delete);

module.exports = router;
