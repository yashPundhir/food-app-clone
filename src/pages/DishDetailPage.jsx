// pages/DishDetailPage.js
import { useParams } from "react-router-dom";
import { foodCategories } from "../constants";

const DishDetailPage = ({ addToCart }) => {
	const { categoryName, dishId } = useParams();

	// Find the category
	const category = foodCategories.find(
		(cat) => cat.name.toLowerCase().replace(/\s+/g, "") === categoryName
	);
	if (!category) return <h2 className="text-center">Category Not Found</h2>;

	// Find the dish by ID
	const dish = category.dishes.find((dish) => dish.id.toString() === dishId);
	if (!dish) return <h2 className="text-center">Dish Not Found</h2>;

	return (
		<section className="py-16">
			<div className="container mx-auto max-w-4xl">
				<img
					src={dish.image}
					alt={dish.name}
					className="w-full rounded-lg mb-8"
				/>
				<h1 className="text-4xl font-bold mb-4">{dish.name}</h1>
				<p className="text-lg mb-4">{dish.description}</p>
				<p className="text-2xl font-semibold mb-8">Price: {dish.price}</p>
				<button
					onClick={() => addToCart(dish)}
					className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
				>
					Add to Cart
				</button>
			</div>
		</section>
	);
};

export default DishDetailPage;
