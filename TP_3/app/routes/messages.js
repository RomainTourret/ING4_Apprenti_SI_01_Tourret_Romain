const express = require('express');
const router = express.Router();

const messagesController = require('../controllers/messages');

router.post('/:channelId', messagesController.create);
router.get('/:channelId', messagesController.index);
router.put('/:channelId/:messageId', messagesController.update);
router.delete('/:channelId/:messageId', messagesController.delete);

module.exports = router;
