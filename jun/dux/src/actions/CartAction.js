const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

const addItem = (item) => ({ type: ADD_ITEM, item });
const removeItem = (id) => ({ type: REMOVE_ITEM, id });

export default {
	ADD_ITEM,
	REMOVE_ITEM,
	addItem,
	removeItem
};