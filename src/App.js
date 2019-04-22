import React, { Component } from 'react';

import './App.css'

import Header from './components/Header'
// import Footer from './components/Footer'
import Overview from './components/Dashboard/Overview'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header name="SpokR"/> 
      <Overview />
      {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
