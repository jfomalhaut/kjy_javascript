import React, { useReducer, useState } from 'react';
import CounterReducer from '../../reducers/CounterReducer';
import { CounterAction } from '../../actions';

const Counter = () => {
	const [state, dispatch] = useReducer(CounterReducer, { count: 0 });
	const { count } = state;

	const increase = () => {
		dispatch(CounterAction.onIncrease());
	};

	return (
		<div>
			<h1 style={{ color: 'red' }}>Count: {count}</h1>
			<button onClick={increase} style={{ margin: '10px' }}>increasement</button>
			<button style={{ margin: '10px' }}>decreasement</button>
		</div>
	);
};

export default Counter;
