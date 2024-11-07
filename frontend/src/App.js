// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ThreadPage from './pages/ThreadPage';
import NewThreadPage from './pages/NewThreadPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/thread/:id" element={<ThreadPage />} />
                <Route path="/new-thread" element={<NewThreadPage />} />
            </Routes>
        </Router>
    );
}

export default App;
