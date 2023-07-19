## Tambola Ticket Generation - Readme

### Problem Statement

The problem is to generate Tambola tickets adhering to certain rules. The rules are as follows:

- Each ticket consists of 3 rows and 9 columns.
- The first column contains numbers from 1 to 9.
- Each row can have a maximum of 5 non-zero values.
- Each column can have at most 2 non-zero values.
- The non-zero values should be randomly generated and sorted within the row.

### Folder Structure

The folder structure for this problem statement is as follows:

```
- models/
  - User.js
  - Ticket.js
- controllers/
  - ticketController.js
  - authController.js
- routes/
  - ticketRoutes.js
  - authRoutes
- utils/
  - validation.js
- index.js
```

### Approach to Solve the Problem

The problem can be solved by following these steps:

1. Define the Ticket model in `models/Ticket.js` to represent a Tambola ticket.
2. Implement the ticket creation logic in `controllers/ticketController.js`:
   - Create the `createTicket` function to generate Tambola tickets.
   - Generate the required number of tickets by calling the `generateTicket` function.
   - Save the generated tickets to the database using the `Ticket` model.
3. Implement the ticket generation logic in `utils/tambolaUtils.js`:
   - Implement the `generateTicket` function to generate a single Tambola ticket.
   - Generate an empty ticket with zeros.
   - Fill the first column with numbers from 1 to 9.
   - Fill random numbers in each row excluding the first column, adhering to the specified rules.
4. Define the routes in `routes/ticketRoutes.js` to handle the API endpoints related to Tambola tickets:
   - Define the route to create tickets (`POST /tickets`).
   - Define the route to fetch all tickets with pagination (`GET /tickets`).
   - Define the route to fetch a ticket by ID (`GET /tickets/:id`).
5. Configure the routes in `index.js` to use the defined ticket routes.

### Dependencies Required

The following dependencies are required for the solution:

- Express.js: To build the API server.
- Mongoose: To interact with the MongoDB database.
- Lodash: To provide utility functions for array manipulation.

### Installation

To install the required dependencies, follow these steps:

1. Ensure you have Node.js installed on your machine. You can download it from the official website: https://nodejs.org
2. Open a terminal or command prompt and navigate to the project directory.
3. Run the following command to install the dependencies:

```
npm install express mongoose lodash
```

or

```
yarn add express mongoose lodash
```

This will install the required dependencies for the Tambola Ticket Generation application.

### List of Routes

The following routes are available for Tambola ticket generation:

- `POST /tickets`: Creates new Tambola tickets.
- `GET /tickets`: Fetches all Tambola tickets with pagination.
- `GET /tickets/:id`: Fetches a specific Tambola ticket by ID.
- `POST /auth/register` : Register a new User
- `POST /auth/login` : Login User

## User Registration:

Route: auth/register</br>
Method: POST</br>
Request Body:</br>
```Javascript
{
  "username":"Vipul",
  "email":"vipul@gmail.com",
  "password":"Vipul@12345"
}
```

## User Login:

Route: auth/login</br>
Method: POST</br>
Request Body:</br>
```Javascript
{
  "username":"Vipul",
  "password":"Vipul@12345"
}
```

## Create Tickets:

Route: /tickets/create </br>
Method: POST </br>
Request Body:</br>
```Javascript
{
    count:2,
}
```

## Get Ticket by ID:

Route: /tickets/:id</br>
Method: GET</br>


Refer to the API documentation or code implementation for detailed information on request and response structures for each route.

That's it! You now have an understanding of the problem statement, folder structure, approach to solving the problem, installation instructions for the dependencies, and the available routes for Tambola ticket generation.