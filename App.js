import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Staffs from './components/Staffs';
import CompanyDetails from './components/CompanyDetails';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staffs" element={<Staffs />} />
        <Route path="/company-details" element={<CompanyDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
