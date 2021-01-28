import CartActionTypes from "./../ActionTypes/cart";

export const addCartItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeCartItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});
