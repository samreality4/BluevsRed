import React from "react";
import NavBar from './NavBar';
import Blue from "./Blue";
import Red from "./Red";

function App() {
  return <div className="App">
    <NavBar/>
    <div className="container-fluid m-0 p-0 col-12">
      <Blue className="col-6"/>
      <Red className="col-6"/>
    </div>
  </div>
}

export default App;
