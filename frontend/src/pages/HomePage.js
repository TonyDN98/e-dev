// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchThreads } from '../services/api';
import styles from './HomePage.module.css';

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
        <div className={styles.container}>
            <h1>Forum pentru Developeri</h1>
            <Link to="/new-thread" className={styles.createLink}>Creează o discuție nouă</Link>
            <ul>
                {threads.map(thread => (
                    <li key={thread._id}>
                        <Link to={`/thread/${thread._id}`}>
                            <h3>{thread.title}</h3>
                        </Link>
                        <p>{thread.content.slice(0, 100)}...</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
