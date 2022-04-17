import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<>
			<Link to="/">Home</Link>
			<br />
			<Link to="/flats">Flats</Link>
			<br />
			<Link to="/login">Login</Link>
			{/* <Link to="/flats">Flats</Link>
			<Link to="/login">Login</Link> */}
		</>
	);
};
export default Navbar;
