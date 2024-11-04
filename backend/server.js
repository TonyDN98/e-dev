// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Ruta de test
app.get('/', (req, res) => {
    res.send('Serverul funcționează!');
});

app.listen(PORT, () => console.log(`Server pornit pe portul ${PORT}`));
