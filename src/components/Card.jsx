// components/Card.js

const Card = ({ name, description, image }) => {
	return (
		<div className="max-w-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:shadow-zinc-500 transform transition duration-500 ease-in-out border-2 border-zinc-100">
			<img
				className="w-full h-48 object-cover mt-0 px-5 pt-5 "
				src={image}
				alt={name}
			/>
			<div className="px-6 py-4 text-center">
				<h2 className="font-bold text-xl mb-2">{name}</h2>
				{description && (
					<p className="text-gray-700 text-base">{description}...</p>
				)}
			</div>
		</div>
	);
};

export default Card;
