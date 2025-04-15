import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Mistral from './pages/Mistral'; 
import DeepSeek from './pages/DeepSeek';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mistral" element={<Mistral />} />
        <Route path="/deepseek" element={<DeepSeek />} />
      </Routes>
    </Router>
  </StrictMode>
);
