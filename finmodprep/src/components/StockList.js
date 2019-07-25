import React from "react";
import { useSelector } from "react-redux";
import { fetchStock } from "../actions/actions";
import Stock from "./Stock";

const StockList = () => {
  const state = useSelector(state => state);

  return (
    <div>
      <h2>Howdy</h2>
      {/* {state.price.map(stock => (
        <Stock name={stock.name} price={stock.price} />
      ))} */}
      <Stock />
    </div>
  );
};

export default StockList;
