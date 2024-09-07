// CTAForm.js
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import tick from "../assets/tick.svg";

const CTAForm = ({ toggleForm }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		mealType: "",
	});

	const handleChange = (e) => {
		const inputValue = e.target.value;
		const name = e.target.name;

		const mobileNumPattern = /^[1-9][0-9]{0,9}$/;

		if (name === "phone") {
			if (inputValue === "" || mobileNumPattern.test(inputValue)) {
				setFormData((prev) => ({
					...prev,
					[name]: inputValue,
				}));
			}
		} else if (name === "name" || name === "email" || name === "mealType") {
			setFormData((prev) => ({
				...prev,
				[name]: inputValue,
			}));
		}
	};

	const emailValidation = (email) => {
		const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
		if (regEx.test(email)) {
			return true;
		} else if (!regEx.test(email) || email !== "") {
			return false;
		}
	};

	const handleSubmit = () => {
		if (
			!formData.name &&
			!formData.email &&
			!formData.mealType &&
			!formData.phone
		) {
			toast.error("Fill the form to proceed", {
				duration: 2000,
			});
		} else if (!formData.name) {
			toast.error("Enter Name to proceed", {
				duration: 2000,
			});
		} else if (!formData.email) {
			toast.error("Enter Email to proceed", {
				duration: 2000,
			});
		} else if (formData.email && !emailValidation(formData.email)) {
			console.log(emailValidation(formData.email));
			toast.error("Enter Valid Email to proceed", {
				duration: 2000,
			});
		} else if (!formData.phone) {
			toast.error("Enter Phone Number to proceed", {
				duration: 2000,
			});
		} else if (formData.phone && formData.phone.length !== 10) {
			toast.error("Enter 10 digits of Phone Number to proceed", {
				duration: 2000,
			});
		} else if (!formData.mealType) {
			toast.error("Selecrt Meal Type to proceed", {
				duration: 2000,
			});
		} else {
			setTimeout(() => {
				document.getElementById("thankyouModal").showModal();
			}, 300);
		}
	};

	const closeModal = () => {
		document.getElementById("thankyouModal").close();
		setTimeout(() => {
			toggleForm();
		}, 100);
	};

	return (
		<>
			<Toaster position="top-center" reverseOrder={false} />
			<div className="bg-white p-8 rounded-lg shadow-md space-y-4">
				<input
					type="text"
					name="name"
					value={formData.name}
					placeholder="Name"
					className="w-full p-2 border border-gray-300 rounded bg-white"
					onChange={handleChange}
					required
				/>
				<input
					type="email"
					name="email"
					value={formData.email}
					placeholder="Email"
					className="w-full p-2 border border-gray-300 rounded bg-white"
					onChange={handleChange}
					required
				/>
				<input
					type="tel"
					name="phone"
					value={formData.phone}
					placeholder="Phone Number"
					maxLength={10}
					className="w-full p-2 border border-gray-300 rounded bg-white"
					onChange={handleChange}
				/>
				<select
					name="mealType"
					value={formData.mealType}
					className="w-full p-2 border border-gray-300 rounded bg-white"
					onChange={handleChange}
					required
				>
					<option value="">Select Meal Type</option>
					<option value="breakfast">Breakfast</option>
					<option value="lunch">Lunch</option>
					<option value="dinner">Dinner</option>
				</select>
				<button
					onClick={handleSubmit}
					className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded transform transition duration-500 ease-in-out"
				>
					Submit
				</button>
			</div>
			<dialog
				id="thankyouModal"
				className="modal bg-opacity-50 backdrop-blur-sm"
			>
				<div className="modal-box bg-white flex flex-col justify-center items-center">
					<div className="flex flex-col justify-center items-center gap-3">
						<img src={tick} alt="tick-icon" className="size-14" />
						<h3 className="font-bold text-center text-[22px] bg-transparent ">
							Thank You For Contacting Us!!
						</h3>
						<p className="bg-transparent text-center font-semibold text-[18px]">
							Our Customer Executive will reach out to you shortly.
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
		</>
	);
};

// Ensure default export is present
export default CTAForm;
