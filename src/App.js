import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import airport from "./components/airports.json";

function App() {
  return(
  <div className="App">
    <h2>Airports Names</h2>
    <SearchBar placeholder="Enter Airport name" data={airport}/>
  </div>
  );
}

export default App;