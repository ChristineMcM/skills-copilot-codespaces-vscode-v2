// Create web server 
// Date: 03/02/2021
// Programmer: Philip Kempton

// Import modules
const express = require('express');
const router = express.Router();
const path = require('path');
const commentsController = require('../controllers/commentsController');

// GET request for comments page
router.get('/', commentsController.getComments);

// POST request for adding a comment
router.post('/', commentsController.addComment);

// POST request for deleting a comment
router.post('/delete', commentsController.deleteComment);

// POST request for updating a comment
router.post('/update', commentsController.updateComment);

// Export module
module.exports = router;