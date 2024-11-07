// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

const path = require('path');




const authRoutes = require('./routes/auth');
const threadRoutes = require('./routes/threads');
const cors = require('cors');


// Middleware
app.use(express.json());
app.use(cors());
// Adaugă această linie pentru a servi fișierele din build
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Conectare la MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Conectat la MongoDB')) .catch((error) => console.error('Eroare la conectarea MongoDB:', error));

// Ruta de test
app.get('/', (req, res) => {
    res.send('Serverul funcționează!');
});

// Gestionează toate rutele necunoscute pentru a trimite aplicația React
app.get('*', (req, res) => { res.sendFile(path.join(__dirname, 'frontend/build', 'index.html')); });
require('dotenv').config();


// Rute
app.use('/api/auth', authRoutes);
app.use('/api/threads', threadRoutes);


app.listen(PORT, () => console.log(`Server pornit pe portul ${PORT}`));
