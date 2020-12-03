import { CounterAction } from '../actions';

// Reducers
const CounterReducer = (state, action) => {
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