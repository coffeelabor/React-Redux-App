import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStock } from "./actions/actions";
import StockList from "./components/StockList";
import "./App.css";

function App() {
  // const state = useSelector(state => state.reducer);

  useEffect(() => {
    fetchStock();
  }, []);

  // const getStock = () => {
  //   state;
  // };
  return (
    <div className="App">
      <h1>Hello</h1>
      <StockList />
    </div>
  );
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  { fetchStock }
)(App);
