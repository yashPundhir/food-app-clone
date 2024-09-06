// pages/MenuPage.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const MenuPage = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }

        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCategories();
  }, []);

  if (error) {
    return <h2 className="text-center">{error}</h2>;
  }

  return (
    <section id="menu" className="py-16">
      <h1 className="text-3xl font-bold text-center pb-[50px]">Our Menu</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link key={category.idCategory} to={`/menu/${category.strCategory.toLowerCase().replace(/\s+/g, '')}`}>
            <Card
              name={category.strCategory}
              description={category.strCategoryDescription}
              image={category.strCategoryThumb}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MenuPage;
