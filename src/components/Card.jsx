// components/Card.js

// const Card = ({ name, description, image, price }) => (
// 	<div className="w-[300px] flex flex-col items-center rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[#e0a59b] to-[#ffffff] hover:shadow-[0px_0px_30px_10px_#ef4444] transition ease-in-out duration-300">
// 		<img
// 			className="mt-[20px] h-48 object-cover rounded-md"
// 			src={image}
// 			alt={name}
// 		/>
// 		<div className="px-6 py-4">
// 			<h2 className="font-bold text-xl mb-2">{name}</h2>
// 			<p className="text-gray-700 text-base">{description}</p>
// 			{price && <p className="text-black font-[700] mt-2">{price}</p>}
// 		</div>
// 	</div>
// );
const Card = ({ name, description, image, price }) => {
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
				{price && <p className="text-black font-[700] mt-2">{price}</p>}
			</div>
		</div>
	);
};

export default Card;
