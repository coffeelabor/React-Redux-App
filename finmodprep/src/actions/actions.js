import axios from "axios";

export const FETCH_STOCK_START = "FETCH_STOCK_START";
export const FETCH_STOCK_SUCCESS = "FETCH_STOCK_SUCCESS";
export const FETCH_STOCK_FAILURE = "FETCH_STOCK_FAILURE";

export const fetchStock = () => dispatch => {
  console.log("FetchStock");
  dispatch({ type: FETCH_STOCK_START });
  axios
    .get(`https://financialmodelingprep.com/api/v3/stock/real-time-price/AAPL`)
    .then(res => {
      console.log("res", res);
    })
    .catch(err => console.log(err));
};
