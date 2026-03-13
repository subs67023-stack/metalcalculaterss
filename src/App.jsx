import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MetalCalculator from './MetalCalculator';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import About from './pages/About';
import Guides from './pages/Guides';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calculator" element={<MetalCalculator />} />
                <Route path="/guides" element={<Guides />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
