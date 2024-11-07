// routes/threads.js
const express = require('express');
const Thread = require('../models/Thread');
const router = express.Router();

// Ruta pentru obținerea unei discuții individuale
router.get('/:id', async (req, res) => {
    try {
        const thread = await Thread.findById(req.params.id).populate('author', 'username');
        if (!thread) {
            return res.status(404).json({ error: 'Discuția nu a fost găsită' });
        }
        res.json(thread);
    } catch (error) {
        res.status(500).json({ error: 'Eroare la obținerea detaliilor discuției' });
    }
});

router.post('/threads', async (req, res) => {
    console.log('Request primit pentru crearea discuției:', req.body);
    try {
        const { title, content, author } = req.body;
        const newThread = await Thread.create({ title, content, author });
        res.status(201).json(newThread);
    } catch (error) {
        console.error('Eroare la crearea discuției:', error);
        res.status(500).json({ error: 'Eroare la crearea discuției' });
    }
});


module.exports = router;
