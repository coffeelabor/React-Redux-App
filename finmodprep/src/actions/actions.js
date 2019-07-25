import axios from "axios";

export const FETCH_STOCK_START = "FETCH_STOCK_START";
export const FETCH_STOCK_SUCCESS = "FETCH_STOCK_SUCCESS";
export const FETCH_STOCK_FAILURE = "FETCH_STOCK_FAILURE";

export const fetchStock = (stock = "") => dispatch => {
  dispatch({ type: FETCH_STOCK_START });
  axios
    .get(`https://financialmodelingprep.com/api/v3/stock/real-time-price/aapl`)
    .then(res => {
      console.log("res", res);
    });
};
