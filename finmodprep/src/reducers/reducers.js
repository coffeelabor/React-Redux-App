import {
  FETCH_STOCK_START,
  FETCH_STOCK_SUCCESS,
  FETCH_STOCK_FAILURE
} from "../actions/actions";

export const initialState = {
  price: {
    error: "",
    stock: "",
    price: "",
    isFetching: false
  }
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_STOCK_START:
      return {
        ...state,
        error: "",
        isFetching: true,
        stock: "",
        price: ""
      };
    case FETCH_STOCK_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        stock: payload,
        price: payload
      };
    default:
      return state;
  }
};
