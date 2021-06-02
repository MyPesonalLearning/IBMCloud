const express = require('express');
const router = express.Router();

const pingController = require('../controllers/pingcontroller');
const watsonAssistantController = require('../controllers/watsonAssistantController');

router.get('/ping', pingController.getPing);

router.post('/watson/assistant/message', watsonAssistantController.postMessage);

module.exports = router;