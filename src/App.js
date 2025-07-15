// App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // 🔁 HashRouter
import './App.css';
import './index.css';


import Index from './pages/Index';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
