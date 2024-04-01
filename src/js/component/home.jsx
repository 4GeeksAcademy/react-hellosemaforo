import React, { useState, useEffect } from "react";


//include images into your bundle


//create your first component
export function Home() {
	const [colorInicial, setColorInicial] = useState("red");
	const [activo, setActivo] = useState(false);


useEffect(()=>{
	let interval;
		if (activo) {
			interval=setInterval(() => {
				setColorInicial(prevColor => {
                    if (prevColor === "red") return "ambar";
                    if (prevColor === "ambar") return "verde";
                    if (prevColor === "verde") return "red";
                });
			}, 1000);
		}else {clearInterval(interval)}
		return ()=>clearInterval(interval)		
},[activo])


	console.log(activo)
	const handelclick = () => {
		if (!activo) {
			setActivo(true)
		}
	}

	return (
		<>
			<div>
				<div className="paloSemaforo"></div>
				<div className="semaforo">
					<div
						onClick={() => setColorInicial("red")}
						className={
							"luzRoja" + (colorInicial === "red" ? " glow" : "")
						}></div>
					<div
						onClick={() => setColorInicial("ambar")}
						className={
							"luzAmbar" + (colorInicial === "ambar" ? " glow" : "")
						}></div>
					<div
						onClick={() => setColorInicial("verde")}
						className={
							"luzVerde" + (colorInicial === "verde" ? " glow" : "")
						}></div>
				</div>
				<button onClick={() => handelclick()} className="btn btn-success">semaforo automatico</button>
			</div>
		</>
	);
};

export default Home;
