import React, { useState, useEffect } from 'react';
import Style from '../css/Style.css';
import { FaStreetView } from 'react-icons/fa';



const Temapp = () => {

	const [city, setCity] = useState(null);
	const [search, setSearch] = useState('Hyderabad');


	useEffect(() => {

		const fetchApi = async () => {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d8d01418cb8dd7d8567990884ec9c806`
			const response = await fetch(url);
			const resjson = await response.json();
			console.log(resjson)
			setCity(resjson.main)
		}
		fetchApi();

	}, [search])

	return (
		<>
			<body style={{
				backgroundColor: '#76BA99'
			}}>
				<div >
					<h2 className='text-center ' style={{ padding: '10px', }}>Weather App</h2>
					<div className='box'>
						<div className='inputData'>
							<input type="search"
								className="inputFeild"
								onChange={(event) => {
									setSearch(event.target.value)
								}}
							/>
						</div>


						{!city ? (
							<p>No Data Found</p>
						) : (
							<div>
								<div className='info' style={{ textAlign: 'center' }}>
									<h2 className='location'>
										<i><FaStreetView /></i>{search}
									</h2>

									<div style={{ display: 'flex', textAlign: 'center', marginLeft: '260px', }}>
										<p style={{ marginLeft: '10px', marginRight: '10px' }}> </p>
									</div>
									<p>{ }</p>
									<h1 className='temp'>{city.temp}°C  </h1>
									<h3 className='tempmin_max' >Min:25.5°C  |Max: 25.5°C</h3>


								</div>
								<div className='wave1'></div>
								<div className="wave2"></div>
								<div className='wave3'></div>
							</div>
						)

						}





					</div>
				</div>
			</body>
		</>
	)
}

export default Temapp