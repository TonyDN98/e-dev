// src/pages/ThreadPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchThread } from '../services/api';

function ThreadPage() {
    const { id } = useParams();
    const [thread, setThread] = useState(null);

    useEffect(() => {
        const getThread = async () => {
            try {
                const response = await fetchThread(id);
                setThread(response.data);
            } catch (error) {
                alert('Eroare la încărcarea detaliilor discuției');
            }
        };
        getThread();
    }, [id]);

    if (!thread) return <p>Încărcare...</p>;

    return (
        <div>
            <h2>{thread.title}</h2>
            <p>{thread.content}</p>
            <h3>Răspunsuri</h3>
            {thread.replies.map((reply) => (
                <div key={reply._id}>
                    <p>{reply.content}</p>
                </div>
            ))}
        </div>
    );
}

export default ThreadPage;
