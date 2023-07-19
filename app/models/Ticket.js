// Ticket.js

const mongoose = require('mongoose');

// Define the Ticket schema
const ticketSchema = new mongoose.Schema({
  ticket: {
    type: [[Number]],
    required: true,
  },
});

// Create and export the Ticket model
module.exports = mongoose.model('Ticket', ticketSchema);
