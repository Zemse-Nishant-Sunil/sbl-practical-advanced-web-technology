🍃 Experiment 08 - React.js + MongoDB
Experiment 08 contains both a React frontend and a Node.js backend.

Technologies
- React.js
- Node.js
- Express.js
- Mongoose
- MongoDB

Backend Setup

Go to:
cd exp08-Connect-React.js-with-MongoDB/backend

Install dependencies:
npm install

Create a .env file:
.env

Use the following format:
MONGO_URI=your_mongodb_connection_string
PORT=5000

The repository contains .env.example as a template.
Do not upload the actual .env file because it contains private
database credentials.

Start Backend
node server.js

The backend runs on:
http://localhost:5000


Start Frontend
Open another terminal.

Go to the Experiment 08 root folder:
cd exp08-Connect-React.js-with-MongoDB


Install dependencies:
npm install

Start React:
npm start


The frontend normally runs at:
http://localhost:3000


Architecture
React.js
    |
    | HTTP Request
    ↓
Node.js + Express
    |
    | Mongoose
    ↓
MongoDB