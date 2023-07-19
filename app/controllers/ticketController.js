const Ticket = require('../models/Ticket');

// Create Tambula ticket
exports.createTicket = async (req, res) => {
  try {
    const ticketsCount = req.body.count || 1; // Number of tickets to generate (default: 1)

    const tickets = [];

    for (let i = 1; i <= ticketsCount; i++) {
      const ticket = generateTicket();
      tickets.push({ ticket });
    }

    // Save the tickets to the database
    const savedTickets = await Ticket.insertMany(tickets);

    const ticketIds = savedTickets.map((ticket) => ticket._id);

    res.status(201).json({ ids: ticketIds, tickets });
  } catch (error) {
    console.error('Error during ticket creation:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Fetch Tambula ticket by ID
exports.getTicketById = async (req, res) => {
  try {
    const ticketId = req.params.id;

    const ticket = await Ticket.findById(ticketId);

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    res.status(200).json({ ticket });
  } catch (error) {
    console.error('Error during ticket fetching:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Fetch all Tambula tickets with pagination
exports.fetchTickets = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    // Calculate the skip value for pagination
    const skip = (page - 1) * limit;

    // Query the tickets from the database with pagination
    const tickets = await Ticket.find()
      .skip(skip)
      .limit(limit);

    res.status(200).json({ tickets });
  } catch (error) {
    console.error('Error during ticket fetching:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
// Helper function to generate a Tambula ticket
function generateTicket() {
  const ticket = [];

  // Generate an empty ticket with zeros
  for (let row = 0; row < 3; row++) {
    const ticketRow = Array(9).fill(0);
    ticket.push(ticketRow);
  }

  // Fill the first column with numbers 1 to 9
  for (let row = 0; row < 3; row++) {
    ticket[row][0] = row * 10 + 1;
  }

  // Fill random numbers in each row excluding the first column
  for (let row = 0; row < 3; row++) {
    const availableNumbers = Array.from({ length: 8 }, (_, i) => i + 2);
    const randomNumbers = generateRandomNumbers(availableNumbers, 4);

    for (let i = 0; i < randomNumbers.length; i++) {
      const column = randomNumbers[i] - 1;
      ticket[row][column] = getRandomNumberForColumn(column);
    }
  }

  return ticket;
}

// Helper function to generate random numbers from an array
function generateRandomNumbers(array, count) {
  const randomNumbers = [];
  const shuffledArray = array.slice();

  // Shuffle the array randomly
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  // Select the first 'count' numbers from the shuffled array
  for (let i = 0; i < count; i++) {
    randomNumbers.push(shuffledArray[i]);
  }

  return randomNumbers;
}

// Helper function to get a random number for a specific column
function getRandomNumberForColumn(column) {
  const start = column * 10 + 1;
  const end = column * 10 + 9;

  return Math.floor(Math.random() * (end - start + 1)) + start;
}