import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Coursesales from './Coursesales'

class App extends Component {
  render() {
      var courses = [
          {name:'Complete ios dev course',price:199},
          {name:'Complete frontend dev course',price:455},
          {name:'Web dev complete',price:522},
          {name:'React with redux',price:136}
      ] 
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
                Welcome to course purchase page
            </h1>
            <Coursesales items={courses}/>        
        </header>
      </div>
    );
  }
}

export default App;
