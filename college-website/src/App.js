import React from 'react';
import './styles/main.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <h1>Welcome to the College Website</h1>
            <Footer />
        </div>
    );
}

export default App;