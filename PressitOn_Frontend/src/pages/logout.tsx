import React from 'react';
import { useHistory } from 'react-router-dom';
import './logout.css';

const Logout: React.FC = () => {
    const history = useHistory();

    const handleLogout = () => {
        // Perform logout actions here (e.g., clearing session storage, redirecting to login page)
        // For demonstration purposes, let's clear the session storage and redirect to the login page
        sessionStorage.clear();
        history.push('/login');
    };

    return (
        <button className="logout-btn" onClick={handleLogout}>
            Logout
        </button>
    );
};

export default Logout;
