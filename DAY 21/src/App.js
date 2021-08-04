import React, { useState } from "react";
import Form from "./components/Form";
import Cards from "./components/Cards";
import { nanoid } from "nanoid";

const App = () => {
	const [state, setstate] = useState([
		{ key: nanoid(), name: "Pizza", calorie: "56" },
	]);

	const add = (data) => {
		let tmp = state;
		data.key = nanoid();
		tmp.push(data);
		console.log(tmp);
		setstate([...tmp]);
	};

	const del = (key) => {
		let tmp = state.filter((mt) => mt.key !== key);
		setstate(tmp);
	};

	const edit = (data, key, seteditState) => {
		console.log("edit ran", data, key, seteditState);
		let tmp = state.filter((mt) => mt.key !== key);
		data.key = nanoid();
		tmp.push(data);
		seteditState([false, null]);
		setstate([...tmp]);
	};

	return (
		<>
			<Form add={add} def={[null, "", ""]} type={"Add"} />
			<Cards del={del} edit={edit} state={state} />
		</>
	);
};

export default App;
