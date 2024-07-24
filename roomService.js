const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3002;

app.use(bodyParser.json());

let rooms = [];

// Endpoint to add a new room
app.post('/addRoom', (req, res) => {
    const { roomNumber, type, price, isAvailable } = req.body;
    const room = { id: rooms.length + 1, roomNumber, type, price, isAvailable };
    rooms.push(room);
    res.status(201).json("room successfully added");
});

// Endpoint to get all rooms
app.get('/rooms', (req, res) => {
    res.status(200).json(rooms);
});

// Endpoint to get a room by ID
app.get('/rooms/:id', (req, res) => {
    const room = rooms.find(r => r.id === parseInt(req.params.id));
    if (room) {
        res.status(200).json(room);
    } else {
        res.status(404).json({ message: 'Room not found' });
    }
});

app.listen(port, () => {
    console.log(`RoomService is running on port ${port}`);
});
