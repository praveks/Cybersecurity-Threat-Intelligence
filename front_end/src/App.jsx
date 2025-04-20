import React from 'react';
import ThreatDashboard from './components/ThreatDashboard';
import './App.css';
import Login from './components/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/signin';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ThreatDashboard />} />
        <Route path="/Signin" element={<Signin/>} />
      </Routes>
    </Router>
  );
};

export default App;
