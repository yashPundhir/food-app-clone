// Body.js

const services = [
	{ title: "Fast Delivery", description: "On-time delivery, every time." },
	{
		title: "Fresh Ingredients",
		description: "Sourced locally for great taste.",
	},
	{
		title: "Chef Specials",
		description: "Curated by top chefs for a gourmet experience.",
	},
];

const Body = () => (
	<section id="services" className="pt-16 pb-5 bg-white">
		<div className="container grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-10">
			{services.map((service, index) => (
				<div
					key={index}
					className="p-8 shadow-md hover:shadow-lg hover:shadow-black transform transition duration-500 ease-in-out border-2 border-zinc-100 rounded-lg"
				>
					<h2 className="text-2xl font-bold mb-4">{service.title}</h2>
					<p>{service.description}</p>
				</div>
			))}
		</div>
	</section>
);

export default Body;
