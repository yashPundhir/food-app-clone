import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CTAForm from "./components/CTAForm";
import MenuPage from "./pages/MenuPage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
import DishesPage from "./pages/DishesPage";
import Footer from "./components/Footer";

const App = () => {
	const [showForm, setShowForm] = useState(false);

	const toggleForm = () => setShowForm(!showForm);

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Hero toggleForm={toggleForm} />} />
				<Route path="/cuisineTypes" element={<MenuPage />} />
				{/* <Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} /> */}
				<Route path="/menu/:categoryName" element={<DishesPage />} />
			</Routes>

			{showForm && (
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.8,
						delay: 0.05,
						ease: [0, 0.71, 0.2, 1.01],
					}}
					className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
				>
					<div className="relative bg-white p-6 rounded shadow-lg">
						<button
							className="absolute top-2 right-3 text-gray-600 hover:text-gray-900"
							onClick={toggleForm}
						>
							✖
						</button>
						<CTAForm toggleForm={toggleForm} />
					</div>
				</motion.div>
			)}

			<Footer />
		</Router>
	);
};

export default App;
