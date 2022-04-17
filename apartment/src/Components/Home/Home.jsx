import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Home = () => {
	const [defData, setDefData] = useState([]);
	useEffect(() => {
		getData();
	}, []);
	const getData = async () => {
		const response = await axios.get('http://localhost:8080/apartments');
		console.log('response:', response.data);
		setDefData([...response.data]);
	};

	return (
		<>
			<table border="0">
				<thead style={{ color: 'white', backgroundColor: 'black' }}>
					<tr>
						<td>Name</td>
						<td>Type</td>
						<td>Block</td>
						<td>Number</td>
						<td>Residents Count</td>
					</tr>
				</thead>
				<tbody>
					{defData.map((e) => {
						return (
							<tr key={e.id}>
								<td>{e.name}</td>
								<td>{e.type}</td>
								<td>{e.block}</td>
								<td>{e.number}</td>
								<td>{e.residents}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};
export default Home;
