import { div } from "framer-motion/client";
import { cartItemsTableColNames } from "../constants";

const CartItem = ({ cartItems }) => {
	return (
		<>
			{cartItems.length === 0 ? (
				<div className="flex flex-col justify-center items-center text-[24px] font-semibold">
					No data found in cart
				</div>
			) : (
				<div className="table-div overflow-x-auto rounded-xl border border-zinc-800 dark:border-zinc-600 z-0">
					<table className="table table-md table-pin-rows">
						<thead className="">
							{cartItemsTableColNames.map((data, index) => (
								<tr
									key={index}
									className="text-white  bg-[#004485]  text-[16px] font-medium text-center"
								>
									{/* <th></th> */}
									<td className="border-0">{data.key1}</td>
									<td className="border-0">{data.key2}</td>
									<td className="border-0">{data.key3}</td>
								</tr>
							))}
						</thead>
						<tbody className="">
							{cartItems.map((data, index) => (
								<tr
									key={index}
									className="bg-white  hover:bg-zinc-300  transform transition duration-500 ease-in-out text-center"
								>
									<th className="text-[16px] w-2/4">
										<img
											src={data.strMealThumb}
											alt=""
											className="w-[200px] "
										/>
									</th>
									<td className="text-[16px] w-1/4">{data.strMeal}</td>
									<td className="text-[16px] w-1/4">{`Rs. ${data.price}`}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</>
	);
};

export default CartItem;
