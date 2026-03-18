const express = require('express');
const app = express();

app.use(express.json());

// Endpoint de prueba
app.get('/', (req, res) => {
 res.json({ message: "Microservicio en línea funcionando 🚀" });
});

// CRUD simple
let items = [];

app.get('/items', (req, res) => {
 res.json(items);
});

app.post('/items', (req, res) => {
 const item = req.body;
 items.push(item);
 res.json(item);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});