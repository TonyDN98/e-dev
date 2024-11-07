// src/pages/NewThreadPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createThread } from '../services/api';

function NewThreadPage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const threadData = {
            title,
            content,
            author: localStorage.getItem('userId'), // de exemplu, pentru a obține ID-ul utilizatorului
        };

        try {
            const response = await createThread(threadData);
            alert('Discuția a fost creată cu succes');
            navigate('/'); // Navighează înapoi la pagina principală după ce discutia a fost creată
        } catch (error) {
            console.error('Eroare la crearea discuției:', error);
            alert('Eroare la crearea discuției');
        }
    };

    return (
        <div>
            <h2>Creează o discuție nouă</h2>
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
                ></textarea>
                <button type="submit">Publică</button>
            </form>
        </div>
    );
}

export default NewThreadPage;
