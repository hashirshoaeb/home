// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './components/Project';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:projectId" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
