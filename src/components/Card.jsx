// components/Card.js
import React from 'react';

const Card = ({ name, description, image }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full h-48 object-cover" src={image} alt={name} />
    <div className="px-6 py-4">
      <h2 className="font-bold text-xl mb-2">{name}</h2>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
);

export default Card;
