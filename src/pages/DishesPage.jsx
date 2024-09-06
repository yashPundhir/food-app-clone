// pages/CategoryPage.js

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../components/Card';

const DishesPage = () => {
  const { categoryName } = useParams();
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
        if (!response.ok) throw new Error('Failed to fetch dishes');

        const data = await response.json();
        setDishes(data.meals);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchDishes();
  }, [categoryName]);

  if (error) {
    return <h2 className="text-center">{error}</h2>;
  }

  return (
    <section className="py-16">
      <h1 className="text-3xl font-bold text-center mb-8">{categoryName} Dishes</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dishes.map((dish) => (
          <Link key={dish.idMeal} to={`/${categoryName}/${dish.idMeal}`}>
            <Card
              name={dish.strMeal}
              image={dish.strMealThumb}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DishesPage;

