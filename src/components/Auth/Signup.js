import React, { useState } from "react";

import firebase from "../../database/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { Link } from "react-router-dom";

const cardStyle = {
  width: "500px"
};
const Signup = () => {
  const initialState = {
    email: "",
    password: ""
  };

  const [state, setstate] = useState(initialState);

  const handleChange = event => {
    const name = event.target.name;

    setstate({
      [name]: event.target.value
    });
  };

  const login = () => {
    firebase.auth().signInWithEmailAndPassword(state.email, state.password);
    console.log(state.email, state.password);
  };

  return (
    <div className="centered-content">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          {state.email ? (
            <h5 className="card-title">
              Welcome Back, <span className="text-warning">{state.email}</span>
            </h5>
          ) : (
            <h5 className="card-title">Sign Up</h5>
          )}
          <h6 className="card-subtitle mb-2 text-muted">
            Enter your informations down below
          </h6>
          <form>
            <div className="form-group">
              <label labelfor="email">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={state.email}
              />
            </div>

            <div className="form-group">
              <label labelfor="password">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                onChange={handleChange}
                value={state.password}
              />
            </div>
            <button className="btn btn-warning" onClick={login}>
              Sign In
            </button>
          </form>
        </div>
      </div>
      <br />
      <small className="text-muted">
        If you don't have a account,{" "}
        <Link to="/signup" className="text-warning">
          click here
        </Link>
      </small>
    </div>
  );
};

export default Signup;
