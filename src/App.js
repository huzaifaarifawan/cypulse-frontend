import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <Router>
                {/* <Header /> Header only once */}
                <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-btn">
                    {darkMode ? (
                        <span style={{ color: '#fff' }}>Dark Mode</span>
                    ) : (
                        <span style={{ color: '#000' }}>Light Mode</span>
                    )}
                </button>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer /> {/* Footer only once */}
            </Router>
        </div>
    );
}

export default App;
