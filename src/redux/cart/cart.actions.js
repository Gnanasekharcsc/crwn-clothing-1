import cartActionTypes from './cart.types';

export const toggleCartDropdown = () => ({
	type: cartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItem = newItem => ({
	type: cartActionTypes.ADD_ITEM,
	newItem,
})