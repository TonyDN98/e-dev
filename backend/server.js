// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

const authRoutes = require('./routes/auth');
const threadRoutes = require('./routes/threads');

// Middleware
app.use(express.json());

// Conectare la MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Conectat la MongoDB')) .catch((error) => console.error('Eroare la conectarea MongoDB:', error));

// Ruta de test
app.get('/', (req, res) => {
    res.send('Serverul funcționează!');
});

// Rute
app.use('/api/auth', authRoutes);
app.use('/api/threads', threadRoutes);


app.listen(PORT, () => console.log(`Server pornit pe portul ${PORT}`));
