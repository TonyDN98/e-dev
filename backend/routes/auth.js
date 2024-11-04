const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const router = express.Router();

// Înregistrare utilizator
router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        await user.save();
        res.status(201).json({ message: 'Utilizator creat cu succes!' });
    } catch (error) {
        res.status(500).json({ error: 'Eroare la înregistrare' });
    }
});

// Login utilizator
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user && await bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
            res.json({ token });
        } else {
            res.status(401).json({ error: 'Credențiale invalide' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Eroare la login' });
    }
});

module.exports = router;
