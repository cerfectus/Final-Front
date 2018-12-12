import React, { Component } from 'react';
import Router from "./Router";
import './App.css';
import Navbar from './components/NavBar/Navbar'


class App extends Component {
  render() {
    return (
      <div>
        <div><Navbar/></div>
      <div className="App">
        <Router/>
      </div>
      </div>
    );
  }
}

export default App;