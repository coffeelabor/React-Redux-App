import React from "react";
import { useSelector } from "react-redux";
import Stock from "./components/Stock";
import "./App.css";

function App() {
  const state = useSelector(state => state.reducer);
  return (
    <div className="App">
      <h1>Hello</h1>
      <Stock />
    </div>
  );
}

export default App;
