// CTAForm.js
import React, { useState } from 'react';

const CTAForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', mealType: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic and submission process
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="w-full p-2 border border-gray-300 rounded"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full p-2 border border-gray-300 rounded"
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        className="w-full p-2 border border-gray-300 rounded"
        onChange={handleChange}
        required
      />
      <select name="mealType" className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} required>
        <option value="">Select Meal Type</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
      <button type="submit" className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded">Submit</button>
    </form>
  );
};

// Ensure default export is present
export default CTAForm;
