const { CartAction } = require("../actions");

const initialState = {
	cart: [],
	cartCount: 0
};

const CartRedcuer = (state = initialState, action) => {
	switch(action.type) {
		case CartAction.ADD_ITEM: {
			return {
				...state,
				cart: [ ...state.cart, { ...action.item, count: 1, check: true } ]
			}
		}
		case CartAction.REMOVE_ITEM: {
			return {
				...state,
				cart: state.cart.filter(item => item.id !== action.id)
			}
		}
		default: {
			return state;
		}
	}
};

export default CartRedcuer;