import { CounterAction } from '../actions';

const initialState = {
	count: 0,
	data: 100
};

// Reducers
const CounterReducer = (state = initialState, action) => {
	switch(action.type) {
		case CounterAction.INCREASEMENT: {
			return {
				...state,
				count: state.count + 1
			};
		}
		default: {
			return state;
		}
	}
};

export default CounterReducer;