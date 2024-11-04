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

module.exports = router;
