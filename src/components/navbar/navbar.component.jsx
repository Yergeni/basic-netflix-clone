import React, { useEffect, useState } from "react";
import { NetflixLogo } from "../../utils/tmdb-requests.helpers";

import "./navbar.styles.css";

const Navbar = () => {
	const [
		handleShowNavBarBackgroundColor,
		setHandleShowNavBarBackgroundColor,
	] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 100
				? setHandleShowNavBarBackgroundColor(true)
				: setHandleShowNavBarBackgroundColor(false);
        });
        
        return () => window.removeEventListener('scroll');
	}, []);

	return (
		<div className={`nav ${handleShowNavBarBackgroundColor && "nav__blackBackground"}`}>
			<img className="nav__logo" src={NetflixLogo} alt="Netflix Logo" />
			<img
				className="nav__avatar"
				src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png"
				alt="Account Avatar"
			/>
		</div>
	);
};

export default Navbar;
