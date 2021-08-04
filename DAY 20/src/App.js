import React, { useState } from "react";
import "./App.css";
import Card from "./Card";

const App = () => {
	const [state, setstate] = useState([{ name: "Pizza", calorie: "56" }, { name: "Burger", calorie: "64" }, { name: "Coke", calorie: "200" }, { name:"Brownie", calorie : "353" }, { name: "Fried Rice", calorie: "35" }, { name: "Dumplings", calorie: "34" }])
	
	const setter = (key) => {
		console.log("state  deleted");
		const tmpState = state;
		tmpState.splice(key, 1);
		setstate([...tmpState]);
	}

	return (
		<>
			<h1>Calorie Read Only</h1>
			<div
				className="cont"
				style={{ "overflow-y": "scroll", width: "600px", height: "400px" }}
			>
				{state.map((item, index) => <Card key={index} name={item.name} calorie={item.calorie} setter={setter}/>)}
			</div>
		</>
	);
};

export default App;
