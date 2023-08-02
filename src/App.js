import React from "react";
import { Home } from "./page";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default React.memo(App);
