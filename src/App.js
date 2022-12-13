import React from 'react';   
import './App.css';
import SearchBar from './Needs/searchbar';
import AirportsData from './Needs/airports.json'


function App() {
  return <div className="App">
    <SearchBar placeholder="Enter the Airport" data={AirportsData}/>
  </div>
    
}
export default App;
