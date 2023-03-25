import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import Chatbot from './chatbot/Chatbot';

const App = () => (
    <div className="">
        <BrowserRouter>
            <div className="">
                <Header />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/capabilities" element={<Capabilities />} />
                </Routes>
                <Chatbot />
            </div>
        </BrowserRouter>
    </div>
);

export default App;
