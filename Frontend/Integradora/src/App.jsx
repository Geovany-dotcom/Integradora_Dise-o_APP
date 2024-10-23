import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Autenticacion/login'; // Asegúrate de que el path es correcto
import Register from './pages/Autenticacion/Register'; // Asegúrate de que el path es correcto

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Otras rutas */}
      </Routes>
    </Router>
  );
};

export default App;
