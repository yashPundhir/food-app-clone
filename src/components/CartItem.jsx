import { cartItemsTableColNames, cartItemsTableData } from "../constants";

const CartItem = () => {
	return (
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
					{cartItemsTableData.map((data, index) => (
						<tr
							key={index}
							className="bg-white  hover:bg-zinc-300  transform transition duration-500 ease-in-out text-center"
						>
							<th className="text-[16px] w-2/4">
								<img src={data.key1} alt="" className="w-[400px]" />
							</th>
							<td className="text-[16px] w-1/4">{data.key2}</td>
							<td className="text-[16px] w-1/4">{data.key3}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CartItem;
