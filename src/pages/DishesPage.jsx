// pages/CategoryPage.js

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Card from "../components/Card";

const DishesPage = ({ setcartItems }) => {
	const { categoryName } = useParams();
	const [dishes, setDishes] = useState([]);
	const [error, setError] = useState(null);

	const getRandomPrice = () => {
		return Math.floor(Math.random() * (300 - 100 + 1)) + 100;
	};

	useEffect(() => {
		const fetchDishes = async () => {
			try {
				const response = await fetch(
					`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
				);
				if (!response.ok) throw new Error("Failed to fetch dishes");

				const data = await response.json();
				console.log(data);

				const dishesWithPrice = data.meals.map((dish) => ({
					...dish,
					price: getRandomPrice(),
					// price: `Rs. ${getRandomPrice()}`,
				}));

				setDishes(dishesWithPrice);
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

	// return (
	//   <section className="py-16 bg-gradient-to-b from-[#e6d8d8] to-[#e0a59b]">
	//     <h1 className="text-3xl font-bold text-center mb-8">{categoryName.toUpperCase()}</h1>
	//     <div className="flex flex-row flex-wrap justify-center items-center gap-[30px]">
	//       {dishes.map((dish) => (
	//         <Link key={dish.idMeal} to={`/${categoryName}/${dish.idMeal}`}>
	//           <Card
	//             name={dish.strMeal}
	//             image={dish.strMealThumb}
	//             price={dish.price}
	//           />
	//         </Link>
	//       ))}
	//     </div>
	//   </section>
	// );
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
					<Toaster position="top-center" reverseOrder={false} />
					<h1 className="text-3xl font-bold text-center mb-8 capitalize">
						{categoryName} Dishes
					</h1>
					<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{dishes.map((dish) => (
							// <Link key={dish.idMeal} to={`/${categoryName}/${dish.idMeal}`}>
							<Card
								dish={dish}
								key={dish.idMeal}
								name={dish.strMeal}
								image={dish.strMealThumb}
								cartBtnVisible={true}
								setcartItems={setcartItems}
							/>
							// </Link>
						))}
					</div>
				</div>
			)}
		</section>
	);
};

export default DishesPage;
