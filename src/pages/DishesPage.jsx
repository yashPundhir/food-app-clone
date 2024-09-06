// pages/CategoryPage.js

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../components/Card';

const DishesPage = () => {
  const { categoryName } = useParams();
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);

  const getRandomPrice = () => {
    return Math.floor(Math.random() * (300 - 100 + 1)) + 100;
  };

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
        if (!response.ok) throw new Error('Failed to fetch dishes');

        const data = await response.json();

        const dishesWithPrice = data.meals.map(dish => ({
          ...dish,
          price: `Rs. ${getRandomPrice()}`,
        }));

        setDishes(dishesWithPrice);
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
    <section className="py-16 bg-gradient-to-b from-[#e6d8d8] to-[#e0a59b]">
      <h1 className="text-3xl font-bold text-center mb-8">{categoryName.toUpperCase()}</h1>
      <div className="flex flex-row flex-wrap justify-center items-center gap-[30px]">
        {dishes.map((dish) => (
          <Link key={dish.idMeal} to={`/${categoryName}/${dish.idMeal}`}>
            <Card
              name={dish.strMeal}
              image={dish.strMealThumb}
              price={dish.price}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DishesPage;

