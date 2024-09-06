const Footer = () => {
	return (
		<footer className="max-w-7xl mx-auto px-10 footer footer-center bg-white text-black p-4 flex flex-col justify-center items-center">
			<aside>
				<p>
					Copyright © {new Date().getFullYear()} - All right reserved by Vyom
					Pundhir
				</p>
			</aside>
		</footer>
	);
};

export default Footer;
