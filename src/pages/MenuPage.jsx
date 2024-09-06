// pages/MenuPage.js

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const MenuPage = () => {
	const [categories, setCategories] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await fetch(
					"https://www.themealdb.com/api/json/v1/1/categories.php"
				);
				if (!response.ok) {
					throw new Error("Failed to fetch categories");
				}

				const data = await response.json();
				console.log(data);
				setCategories(data.categories);
			} catch (error) {
				setError(error.message);
			}
		};

		fetchCategories();
	}, []);

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
		<section id="menu" className="py-16 bg-white">
			{categories.length === 0 ? (
				<div className="flex flex-col justify-center items-center">
					<span className="text-[24px] font-semibold w-full text-center">
						Please Wait Loading Content...
					</span>
				</div>
			) : (
				<div className="max-w-7xl mx-auto px-10">
					<h1 className="text-3xl font-bold text-center pb-[50px]">
						Available Cuisine Types
					</h1>
					<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{categories.map((category) => (
							<Link
								key={category.idCategory}
								to={`/menu/${category.strCategory
									.toLowerCase()
									.replace(/\s+/g, "")}`}
							>
								<Card
									name={category.strCategory}
									description={category.strCategoryDescription.slice(0, 100)}
									image={category.strCategoryThumb}
								/>
							</Link>
						))}
					</div>
				</div>
			)}
		</section>
	);
};

export default MenuPage;
