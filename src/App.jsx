// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Body from './components/Body';
import CTAForm from './components/CTAForm';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DishesPage from './pages/DishesPage';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero toggleForm={toggleForm} />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/menu/:categoryName" element={<DishesPage />} />
      </Routes>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative bg-white p-6 rounded shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={toggleForm}
            >
              ✖
            </button>
            <CTAForm />
          </div>
        </div>
      )}
      <Body />
    </Router>
  );
};

export default App;
