
import React, { useState, useEffect } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {


	const Style = { width: "90%" }

	const [array, setArray] = useState('');

	const [valori, setValori] = useState('');

	const [list, setList] = useState([1, 2, 3]);



	const Submi = () => {

		setList(list.concat(array));

	};


	useEffect(() => {
		document.addEventListener('keydown', detectKeyDown, true)
	}, [list])

	const detectKeyDown = (e) => {
		let valores = String(e.key)
		console.log(valores)
		if (valores = "Enter") {
			setList()
		}
	}


	return (
		<div className="text-center m-auto mt-5">
			<input style={Style} value={array} onChange={(e) => setArray(e.target.value)} />

			<ul>
				{
					list.map((item) => {
						return (
							<li key={item}>{item}</li>)
					})}

			</ul>
		</div >
	);
};

export default Home;
