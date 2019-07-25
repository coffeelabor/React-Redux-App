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
    default:
      return state;
  }
};
