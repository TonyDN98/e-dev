// src/pages/RegisterPage.js
import React, { useState } from 'react';
import { register } from '../services/api';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register({ username, email, password });
            alert('Înregistrare reușită!');
        } catch (error) {
            alert('Eroare la înregistrare');
        }
    };

    return (
        <div>
            <h2>Înregistrare</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Parola" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Înregistrează-te</button>
            </form>
        </div>
    );
}

export default RegisterPage;
