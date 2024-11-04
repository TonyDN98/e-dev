// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { fetchThreads } from '../services/api';
import { Link } from 'react-router-dom';

function HomePage() {
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        const getThreads = async () => {
            try {
                const response = await fetchThreads();
                setThreads(response.data);
            } catch (error) {
                alert('Eroare la încărcarea discuțiilor');
            }
        };
        getThreads();
    }, []);

    return (
        <div>
            <h2>Lista Discuțiilor</h2>
            {threads.map((thread) => (
                <div key={thread._id}>
                    <h3><Link to={`/thread/${thread._id}`}>{thread.title}</Link></h3>
                    <p>{thread.content}</p>
                </div>
            ))}
        </div>
    );
}

export default HomePage;
