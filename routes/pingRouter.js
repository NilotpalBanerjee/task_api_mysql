const express = require('express');
const ping = require('../controller/pingControllers');

const router = express.Router();

router.get('/', ping);

module.exports = router;
