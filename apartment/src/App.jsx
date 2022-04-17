import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Routers from './Components/Routers';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			{/* <Navbar /> */}
			<Routers />
		</>
	);
}

export default App;
