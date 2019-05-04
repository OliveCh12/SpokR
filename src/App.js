import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Overview from "./components/Dashboard/Overview";

// Informations Components
import Empty from "./components/Layout/Empty"
import Welcome from "./components/Public/Welcome"

// Auth Components
import Signin from "./components/Auth/Signin"
import Signup from "./components/Auth/Signup"


import FirestoreCollection from "./components/Firestore"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="SpokR" />
        <Switch>
          {/* Public Routes */}
          <Route path="/welcome" component={Welcome} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />

          {/* Protected Routes */}
          <Route path="/stories" component={Overview} />
          <Route path="/firestore" component={FirestoreCollection} />
          <Route path="/explore" component={Overview} />
          <Route component={Empty} />
        </Switch>
      </div>
    );
  }
}

export default App;
