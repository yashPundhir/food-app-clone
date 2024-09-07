import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

const Cart = () => {
	return (
		<section className="cart flex flex-row justify-between items-start gap-10 max-w-7xl mx-auto px-10">
			<div>
				<h1 className="text-[30px] font-semibold text-center pt-7 ">
					Your Orders
				</h1>

				<div className="flex flex-col items-center mt-2 mb-5">
					<CartItem />
				</div>
			</div>
			<div className="mt-3 border-2 rounded-lg px-5 pt-5 pb-7">
				<CheckoutForm />
			</div>
		</section>
	);
};

export default Cart;
