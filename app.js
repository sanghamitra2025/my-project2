const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json()); 

app.get('/api/items', (req, res) => {
    res.json({ message: "List of items" });
});
app.get('/api/items2', (req, res) => {
    res.json({ message: "List of items to check in local" });
});

app.get('/api/items3', (req, res) => {
    res.json({ message: "List of items to check in local 2nd check" });
});
app.post('/api/items', (req, res) => {
    const newItem = req.body;
    res.status(201).json({ message: "Item added", data: newItem });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
