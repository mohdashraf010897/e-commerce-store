import CartActionTypes from "./../ActionTypes/cart";

export const addCartItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeCartItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const toggleCartVisibility = (item) => ({
  type: CartActionTypes.TOGGLE_CART_VISIBILITY,
});
