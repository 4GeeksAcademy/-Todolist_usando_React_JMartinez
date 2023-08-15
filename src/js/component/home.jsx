
import React, { useState, useEffect } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
const Home = () => {
	const Style = { width: "100%" }
	const Style2 = { width: "30%" }

	//valor del campo
	const [campo, setCampo] = useState('');
	const [list, setList] = useState([]);


	//Boton actual

	const detectKeyDown = (event) => {

		if (event.key === "Enter" && campo !== "") {
			setList(list.concat({ label: campo, done: true }));
			setCampo("")

		}
	}



	//el pepe



	function pepe(id) {
		setList(list.filter((x, newIndex) =>
			id != newIndex
		))
	}


	/* 
			let array2 = []
			array2 = list.filter((item, index) => {
				if (index !== id) {
					id != 
				}
	
			})
			setList(array2) */



	//Crear usuario
	async function CRUS() {
		try {
			const respu = await
				fetch('https://playground.4geeks.com/apis/fake/todos/user/Jorge', {
					method: "POST",
					body: JSON.stringify([]),
					headers: {
						"Content-Type": "application/json"
					}

				})

			const data = await respu.json()
			console.log(data);


		} catch (error) {

			console.log(error);
		}


	}


	//Obtener Info

	async function obtenerInfo() {

		try {
			const res = await
				fetch('https://playground.4geeks.com/apis/fake/todos/user/Jorge', {
					method: "GET",
					headers: {
						"Content-Type": "application/json"

					}

				})

			const data = await res.json()
			setList(data)

		} catch (error) {

			console.log(error);
		}
	}



	//Actualizar

	async function actualizar() {

		try {
			const resa = await
				fetch('https://playground.4geeks.com/apis/fake/todos/user/Jorge', {
					method: "PUT",
					body: JSON.stringify(list),
					headers: {
						"Content-Type": "application/json"
					},


				})

			const data = await resa.json()
			console.log(data);

		} catch (error) {

			console.log(error);
		}
	}
	let Style3 = { display: "block" }
	function nada() {

		if (list.label === "") {
			Style3 = { display: "none" }
		} else {
			Style3 = { display: "block" }
		}
	}


	//USE EFFECTS

	useEffect(function () {
		CRUS()
		obtenerInfo()
		nada()


	}, [])


	useEffect(function () {
		actualizar()
		console.log()

	}, [list])

	let array3 = [1]
	function Cambio() {
		setList(array3)
		CRUS()


	}
	function motoa() {
		const mario = document.querySelector(".coca")
		mario.style.color = "blue"
	}

	return (

		<div className="m-auto mt-5 ">
			<div className=" row m-auto mt-5 opacity-25" style={Style2}>
				<h1 className="display-1 fw-light text-center">todos</h1>
			</div>
			<div className=" text-center m-auto fst-italic" style={Style2} id="caja_p">
				<input className=" fst-italic m-auto" onKeyDown={detectKeyDown} style={Style} value={campo} onChange={(e) => setCampo(e.target.value)} id="input" />
				<ul className="list-group m-auto " style={Style}>
					{
						list.map((item, index) => (
							/* 	return ( */
							<li className="  fw-light list-group-item d-flex justify-content-between align-items-center list-group-item-action border border-0 " id={index} style={Style} key={index} > {item.label}

								< a className="text-danger coca" style={Style3} onClick={() => pepe(index)} id={index} key={index}>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" momia bi bi-x-square" viewBox="0 0 16 16">
										<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
										<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</a>


							</li>
						))}
					<div className="m-auto fst-italic fw-light" id="divi" style={Style} > <p>{list.length + " " + "items left"}</p> </div>
				</ul>



			</div >
			<div className="monP m-auto" style={Style2}>
				<div className="m-auto border border-top-0" id="diva" > </div>
				<div className="m-auto border border-top-0" id="divb" > </div>
			</div>

			<div className="mt-5  m-auto border d-flex justify-content-center" id="divc1">
				<button type="button" className="btn btn-primary" onClick={() => { Cambio(), motoa() }} id="boton1">Primary</button>
			</div>
		</div >


	);
};

export default Home;
