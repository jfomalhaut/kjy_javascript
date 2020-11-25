import { useState } from "react";
const REGEX = /[0-9]/;

export const useInput = (initailValue) => {
	const [data, setData] = useState(initailValue);
	const onChange = (ev) => {
		const { target: { name, value } } = ev;
		setData({ ...data, [name]: value });
	};
	return [data, onChange, setData];
};

export const useInputNumber = (initailValue) => {
	const [data, setData] = useState(initailValue);
	const onChange = (ev) => {
		const { target: { name, value } } = ev;
		if (REGEX.test(value)) {
			setData({ ...data, [name]: value });
		}
	};
	return [data, onChange, setData];
};

