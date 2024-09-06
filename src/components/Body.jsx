// Body.js
import React from 'react';

const services = [
  { title: "Fast Delivery", description: "On-time delivery, every time." },
  { title: "Fresh Ingredients", description: "Sourced locally for great taste." },
  { title: "Chef Specials", description: "Curated by top chefs for a gourmet experience." },
];

const Body = () => (
  <section id="services" className="py-16 border-2 border-[black]">
    <div className="container mx-auto grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="p-8 shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Body;
