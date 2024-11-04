// src/pages/NewThreadPage.js
import React, { useState } from 'react';
import { createThread } from '../services/api';

function NewThreadPage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createThread({ title, content, userId: localStorage.getItem('userId') });
            alert('Discuția a fost creată cu succes!');
            window.location.href = '/'; // Redirecționează către pagina principală
        } catch (error) {
            alert('Eroare la crearea discuției');
        }
    };

    return (
        <div>
            <h2>Crează o Discuție Nouă</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Titlu"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Conținut"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit">Publică Discuția</button>
            </form>
        </div>
    );
}

export default NewThreadPage;
