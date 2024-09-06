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
    <section id="menu" className="py-16 bg-gradient-to-b from-[#e6d8d8] to-[#e0a59b]">
      <h1 className="text-[40px] font-[700] text-center pb-[50px]">Our Menu</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category) => {
          // Truncate description if longer than 30 characters
          const truncatedDescription = category.strCategoryDescription.length > 30
            ? category.strCategoryDescription.substring(0, 34) + '...'
            : category.strCategoryDescription;

          return (
            <Link key={category.idCategory} to={`/menu/${category.strCategory.toLowerCase().replace(/\s+/g, '')}`}>
              <Card
                name={category.strCategory}
                description={truncatedDescription}
                image={category.strCategoryThumb}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default MenuPage;
