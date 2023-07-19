// ticketRoutes.js

const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

// POST /tickets/create
router.post('/create', ticketController.createTicket);

// GET /tickets/:id
router.get('/:id', ticketController.getTicketById);

module.exports = router