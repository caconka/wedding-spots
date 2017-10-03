const express = require('express');
const router = express.Router();
const checkIdParams = require('../../middleware/check-id');
const Controller = require('./comment.controller');

router.post('/:id/create', checkIdParams, Controller.createPost); 
router.post('/:id/edit', checkIdParams, Controller.editPost); 

module.exports = router;