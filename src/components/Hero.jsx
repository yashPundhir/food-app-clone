// Hero.js
import { useState, useEffect } from "react";
import bg1 from "../assets/bg1.jpeg";
import bg3 from "../assets/bg-3.jpeg";
import bg4 from "../assets/bg4.jpeg";
import bg5 from "../assets/bg5.jpeg";
import bg6 from "../assets/bg6.jpeg";
import bg7 from "../assets/bg7.jpeg";
import bg8 from "../assets/bg8.jpeg";
import bg9 from "../assets/bg9.jpeg";
import bg10 from "../assets/bg10.jpeg";
import bg11 from "../assets/bg11.jpeg";
import bg12 from "../assets/bg12.jpeg";
import bg13 from "../assets/bg13.jpeg";
import bg14 from "../assets/bg14.jpeg";
import Body from "./Body";

const images = [
	bg1,
	bg3,
	bg4,
	bg5,
	bg6,
	bg7,
	bg8,
	bg9,
	bg10,
	bg11,
	bg12,
	bg13,
	bg14,
];

const Hero = ({ toggleForm }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, 2000); // 2000ms = 2 seconds

		return () => clearInterval(interval); // Cleanup the interval on unmount
	}, []);

  // return (
  //   <section className="relative h-[465px] flex items-center justify-center"
  //     style={{
  //       backgroundImage: `url(${images[currentImageIndex]})`,
  //       backgroundSize: 'cover',
  //       backgroundPosition: 'center',
  //       transition: 'background-image 1s ease-in-out',
  //     }}
  //   >
  //     <div className="absolute inset-0 bg-black opacity-50"></div>
  //     <div className="relative z-10 text-center text-white">
  //       <h1 className="text-5xl font-bold">DelishBites</h1>
  //       <p className="mt-4 text-xl">Satisfy your cravings in just a few clicks</p>
  //       <button
  //         onClick={toggleForm}
  //         className="mt-6 px-8 py-3 bg-red-500 hover:bg-white text-white font-bold rounded-lg shadow-xl hover:text-[#ef4444] transition ease-in-out duration-500"
  //       >
  //         Order Now
  //       </button>
  //     </div>
  //   </section>
  // );
	return (
		<>
			<section
				className="relative h-[465px] flex items-center justify-center max-w-7xl mx-auto px-10"
				style={{
					backgroundImage: `url(${images[currentImageIndex]})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					transition: "background-image 1s ease-in-out",
				}}
			>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="relative z-10 text-center text-white">
					<h1 className="text-5xl font-bold animate-pulse">DelishBites</h1>
					<p className="mt-4 text-xl">
						Satisfy your cravings in just a few clicks
					</p>
					<button
						onClick={toggleForm}
						className="mt-6 px-8 py-3 bg-red-500 hover:bg-red-700 text-white font-bold rounded-lg shadow-md transform transition duration-500 ease-in-out"
					>
						Order Now
					</button>
				</div>
			</section>
			<Body />
		</>
	);
};

export default Hero;
