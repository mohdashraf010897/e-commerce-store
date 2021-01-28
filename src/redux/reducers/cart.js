import CartActionTypes from "./../ActionTypes/cart";

const INITIAL_STATE = {
  cartItems: [],
  isCartVisible: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload
        ),
      };

    case CartActionTypes.TOGGLE_CART_VISIBILITY: {
      return {
        ...state,
        isCartVisible: !state.isCartVisible,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
