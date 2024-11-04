// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
require('dotenv').config();


// Middleware
app.use(express.json());

// Ruta de test
app.get('/', (req, res) => {
    res.send('Serverul funcționează!');
});

// Conectare la MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Conectat la MongoDB')) .catch((error) => console.error('Eroare la conectarea MongoDB:', error));

app.listen(PORT, () => console.log(`Server pornit pe portul ${PORT}`));
