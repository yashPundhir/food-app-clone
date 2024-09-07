import tick from "../assets/tick.svg";

const CheckoutForm = () => {
	const handleCheckoutBtnClick = () => {
		setTimeout(() => {
			document.getElementById("confirmModal").showModal();
		}, 300);
	};

	const closeModal = () => {
		document.getElementById("confirmModal").close();
	};

	return (
		<div className=" w-[350px]">
			<h1 className="text-[30px] font-semibold text-center">Order Summary</h1>
			<div className="w-full h-[2px] bg-gray-400 my-3"></div>
			<div className="flex flex-row justify-between items-center gap-5 mt-5">
				<span className="text-[18px] font-semibold">ITEMS:</span>
				<span className="text-[18px] font-semibold">Count</span>
			</div>
			<div className="flex flex-row justify-between items-center gap-5 mt-5">
				<span className="text-[18px] font-semibold">TOTAL COST:</span>
				<span className="text-[18px] font-semibold">Total</span>
			</div>
			<button
				onClick={handleCheckoutBtnClick}
				className="w-full bg-red-500 rounded-lg px-5 py-2 mt-10 text-white font-semibold"
			>
				Checkout
			</button>
			<dialog
				id="confirmModal"
				className="modal bg-opacity-50 backdrop-blur-sm"
			>
				<div className="modal-box bg-white flex flex-col justify-center items-center">
					<div className="flex flex-col justify-center items-center gap-3">
						<img src={tick} alt="tick-icon" className="size-14" />
						<h3 className="font-bold text-center text-[22px] bg-transparent ">
							Thank You. Order Placed Successfully
						</h3>
						<p className="bg-transparent text-center font-semibold text-[18px]">
							Your food will reach to you shortly.
						</p>
					</div>
					<div className="modal-action bg-transparent">
						<form method="dialog">
							<button
								className="btn bg-gradient-to-r from-[#40c2ba] to-[#004485] w-[100px] text-lg text-white border-0"
								onClick={closeModal}
							>
								Close
							</button>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	);
};

export default CheckoutForm;
