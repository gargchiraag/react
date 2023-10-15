import { useState } from 'react';
import './App.css';
function App() {
  const state=["--Select--","Punjab","Haryana"];
  const city={
    "--Select--":["Select State"],
    "Punjab":["--Select--","Bathinda","Sangrur","Mohali","Malout","Muktsar"],
    "Haryana":["--Select--","Karnal","Hisar","Panipat","Kaithal","Ambala"]
  }
  let [selectedState,setSelectedState]=useState("");

  return (
    <div className="App">
    State:
    <select onChange={(e)=>{setSelectedState(e.target.value)}}>
      {
        state.map(state=>{
          return <option>{state}</option>
        })
      }
    </select>  
    <br></br>
    {
      <span>City</span> &&
      selectedState &&  <select>
        {
          city[selectedState].map(cities=>{
            return <option>{cities}</option>
          })
        }
      </select>
    }  
    </div>
  );
}

export default App;
