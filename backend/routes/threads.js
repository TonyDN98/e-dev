const express = require('express');
const Thread = require('../models/Thread');
const router = express.Router();

// Creare discuție nouă
router.post('/', async (req, res) => {
    try {
        const thread = new Thread({
            title: req.body.title,
            content: req.body.content,
            author: req.body.userId,
        });
        await thread.save();
        res.status(201).json(thread);
    } catch (error) {
        res.status(500).json({ error: 'Eroare la crearea discuției' });
    }
});

// Obține toate discuțiile
router.get('/', async (req, res) => {
    try {
        const threads = await Thread.find().populate('author', 'username');
        res.json(threads);
    } catch (error) {
        res.status(500).json({ error: 'Eroare la obținerea discuțiilor' });
    }
});

module.exports = router;
