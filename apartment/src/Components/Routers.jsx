import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Flats from './Flats/Flats';
import Login from './Login/Login';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
const Routers = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path={'/flats'} element={<Flats />} />
				<Route path={'/login'} element={<Login />} />
			</Routes>
		</>
	);
};
export default Routers;
