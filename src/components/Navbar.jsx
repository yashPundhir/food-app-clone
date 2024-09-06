// Navbar.js

import { Link } from "react-router-dom";

const Navbar = () => (
	// <nav className="sticky top-0 bg-white shadow-lg py-4 z-50 bg-gradient-to-b from-[#ffffff] to-[#e0a59b]">
	//   <div className="container mx-auto flex justify-between items-center">
	//     <Link to="/" className="text-2xl font-bold cursor-pointer hover:text-red-500 transition ease-in-out duration-300">DelishBites</Link>
	//     <ul className="hidden md:flex space-x-8">
	//       <li><Link to="/" className="hover:text-red-500 font-[700] transition ease-in-out duration-300">Home</Link></li>
	//       <li><Link to="/menu" className="hover:text-red-500 font-[700] transition ease-in-out duration-300">Menu</Link></li>
	//       <li><Link to="/about" className="hover:text-red-500 font-[700] transition ease-in-out duration-300">About Us</Link></li>
	//       <li><Link to="/contact" className="transition ease-in-out duration-300 hover:text-red-500 font-[700]">Contact Us</Link></li>
	//     </ul>
	//     {/* Mobile Menu Button */}
	//   </div>
	// </nav>
	<nav className="sticky top-0 bg-white shadow-md py-4 z-50">
		<div className="container max-w-7xl mx-auto flex justify-between items-center px-10">
			<Link to={"/"} className="text-2xl font-bold">
				DelishBites
			</Link>
			<ul className="hidden md:flex space-x-8">
				<li>
					<Link
						to="/"
						className="hover:text-red-500 transform transition duration-300 ease-in-out"
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						to="/cuisineTypes"
						className="hover:text-red-500 transform transition duration-300 ease-in-out"
					>
						Cuisine Types
					</Link>
				</li>
				<li>
					<Link
						to="/cart"
						className="hover:text-red-500 transform transition duration-300 ease-in-out"
					>
						Cart
					</Link>
				</li>
				{/* <li>
					<Link
						to="/about"
						className="hover:text-red-500 transform transition duration-300 ease-in-out"
					>
						About Us
					</Link>
				</li>
				<li>
					<Link
						to="/contact"
						className="hover:text-red-500 transform transition duration-300 ease-in-out"
					>
						Contact Us
					</Link>
				</li> */}
			</ul>
			{/* Mobile Menu Button */}
		</div>
	</nav>
);

export default Navbar;
