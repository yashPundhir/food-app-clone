// pages/CategoryPage.js

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";

const DishesPage = () => {
	const { categoryName } = useParams();
	const [dishes, setDishes] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchDishes = async () => {
			try {
				const response = await fetch(
					`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
				);
				if (!response.ok) throw new Error("Failed to fetch dishes");

				const data = await response.json();
				setDishes(data.meals);
			} catch (error) {
				setError(error.message);
			}
		};

		fetchDishes();
	}, [categoryName]);

	if (error) {
		return (
			<div className="flex flex-col justify-center items-center gap-2">
				<span className="text-[24px] font-semibold">Something Went Wrong.</span>
				<span className="text-[24px] font-semibold">
					Please Try Again Later
				</span>
			</div>
		);
	}

	return (
		<section className="py-16 bg-white">
			{dishes.length === 0 ? (
				<div className="flex flex-col justify-center items-center">
					<span className="text-[24px] font-semibold w-full text-center">
						Please Wait Loading Content...
					</span>
				</div>
			) : (
				<div className="max-w-7xl mx-auto px-10">
					<h1 className="text-3xl font-bold text-center mb-8 capitalize">
						{categoryName} Dishes
					</h1>
					<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{dishes.map((dish) => (
							<Link key={dish.idMeal} to={`/${categoryName}/${dish.idMeal}`}>
								<Card name={dish.strMeal} image={dish.strMealThumb} />
							</Link>
						))}
					</div>
				</div>
			)}
		</section>
	);
};

export default DishesPage;
